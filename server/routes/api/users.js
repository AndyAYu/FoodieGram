const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../server/models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../server/config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../server/validation/register');
const validateLoginInput = require('../../server/validation/login');
const Post = require("../../server/models/Post");

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route"})
})

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ handle: req.body.handle }).then(user => {
      if (user) {
        errors.handle = "User already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { id: user.id, email: user.email, avatar: user.avatar };
  
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "This user does not exist";
        return res.status(400).json(errors);
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, email: user.email, avatar: user.avatar };
  
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
    });
  });

  router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email
    });
  })

  router.get('/',(req, res) =>{
    User.find({})
      .then(users => res.json(users))
  })

  // router.get('/:id', (req, res) => {
  //   try {
  //     const userId = req.params.id
  //     User.findById(userId)
  //       .then(user => res.status(200).json(user));
     
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }

  // })

  router.get('/',async (req, res) => {
    const userId = req.query.userId;
    const handle = req.query.handle;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ handle: handle });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get all users

  // router.get('/',(req, res) =>{
  //   User.find({})
  //     .then(users => res.json(users))
  // })

// add friend
// debugger
router.post('/', passport.authenticate('jwt',{session: false}), (req, res) => {
  User.findById(req.user.id).then(currentUser => {
    if(!currentUser.friends.includes(req.body.userId)){
      currentUser.friends.push(req.body.userId);
      currentUser.save();
    }
  })
  res.send({friendId: req.body.userId, currentUserId: req.user.id})
})


//delete friend
router.delete( '/:friendId', passport.authenticate('jwt', {session:false}),  (req, res) => {
  // debugger
  User.findById(req.user.id).then(currentUser => {
      currentUser.friends.push(req.body.userId);
      currentUser.save();
    }
  )
  res.send({ friendId: req.body.userId, currentUserId: req.user.id })
  })


// update Avatar
router.patch('/:id', (req, res) => {
  debugger
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(avatar => res.json(avatar))
  .catch(err =>
    res.status(400).json({ error: 'Unable to update the Database' })
    );
});

module.exports = router;