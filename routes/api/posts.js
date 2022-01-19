const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/', (req,res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts))
        .catch(err => restart.status(404).json({ nopostsfound: 'No posts found'}));
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

<<<<<<< HEAD
router.post('/',
=======
router.post('/new_post',
>>>>>>> main
    passport.authenticate('jwt', { session: false }),
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
            restaurant: req.body.restaurant
        });

        newPost.save().then(post => res.json(post));
    }
);

router.patch('/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.address);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Post.findById(req.params.id)
        .then(post => post.update(req.body))
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
        )
        
});

module.exports = router;