const Post = require('../models/Post');
const router = require('express').Router();
const cors = require('cors');

router.post("/", cors(), async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", cors(), async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new:true });
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("Você não é o criador do post, portanto, não é possivel altera-lo");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post Deletado");
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("Você não é o criador do post, portanto, não é possivel deletar-lo");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", cors(), async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", cors(), async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat; //categoria

    try {
        let posts;
        if(username) {
            posts = await Post.find({ username: username }).limit(6);
            res.status(200).json(posts);
        } else if(catName) {
            posts = await Post.find({ categories: { $in: [ catName ] } }).limit(6);
            res.status(200).json(posts);
        } else {
            posts = await Post.find().limit(6);
            res.status(200).json(posts);
        }
    } catch (error) {
        res.status(500).json(error); 
    }
});

module.exports = router;