const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/posts', (req,res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts))
        .catch(err => restart.status(404).json({ nopostsfound: 'No posts found'}));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(posts => restart.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
        )
    );
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => restart.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
            );            
});

router.post('/posts',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.address);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            body: req.body.text,
            address: req.address.text,
            user: req.user.id
        });

        newPost.save().then(post => res.json(tweet));
    }
);

module.exports = router;