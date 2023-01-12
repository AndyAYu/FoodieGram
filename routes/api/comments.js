const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const { restart } = require('nodemon');
const passport = require('passport');

const Comment = require('../../../models/Comment');
const validateCommentInput = require('../../validation/comments');

router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments))
        .catch(err => restart.status(404).json({ nocommentsfound: 'No comments found' }));
});

router.get('/:posts/:post_id', (req, res) => {
    Comment.find({ post: req.params.post_id })
        .sort({ date: -1 })
        .then(comments => res.json(comments))
        .catch(err =>
            res.status(404).json({ nocommentsfound: 'No comments available @ this post_id' }
            )
        );
})

router.get('/:user/:user_id', (req, res) => {
    Comment.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(comments => res.json(comments))
        .catch(err =>
            res.status(404).json({ nocommentsfound: 'No comment @ this user_id'}
            )
        );
})

router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err =>
            res.status(404).json({ nocommentfound: 'No comment found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCommentInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const newComment = new Comment({
            body: req.body.body,
            post: req.body.post,
            user: req.body.user
        });
        newComment.save().then(comment => res.json(comment));
    }
);

module.exports = router;