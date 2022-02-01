const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
// const { restart } = require('nodemon');
const passport = require('passport');
const multer = require('multer');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '/frontend/public/postImages');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.orginalname);
//     }
// })

const upload = multer({ dest: './frontend/public/storage' });

router.get('/', (req,res) => {
    Post.find()
        .sort({ date: -1})
        .populate('user')
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found'}));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
        )
    );
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
            );            
});

router.post('/',
    passport.authenticate('jwt', { session: false }), upload.single("postImage"),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);
        // debugger
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            body: req.body.body,
            address: req.body.address,
            user: req.body.user,
            restaurant: req.body.restaurant,
            postImg: req.file.filename
        });

        newPost.save((err, post) => {
            post
            .populate('user')
            .then(post => res.json(post));
    })
});

router.patch('/:id', (req, res) => {     
    const update = {
        body: req.body.body,
        restaurant: req.body.restaurant,
        address: req.body.address
    } 

    Post.findByIdAndUpdate(req.params.id, update, {new: true})
        .populate('user')
        .exec((err, docs) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(docs)
        }
    })
        
});

router.delete('/:id', (req, res) => {     
    Post.findByIdAndDelete(req.params.id, (err, docs) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(docs)
        }
    })    
});

module.exports = router;