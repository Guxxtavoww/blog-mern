const bcrypt = require('bcrypt');
const router = require('express').Router();
const cors = require('cors');

const User = require("../models/User");
const Post = require('../models/Post');

router.put("/:id", cors(), async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("Você só pode atualizar a sua conta!");
    }
}); 

router.delete("/:id", cors(), async (req, res) => {
    if(req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)

            if(!user) res.status(404).json("Usuario não econtrado");

            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id);
    
                res.status(200).json("Usuário foi deletado");
            } catch (error) {
                res.status(500).json(error);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(401).json("Você só pode deletar a sua conta!");
    }
});

router.get("/:id", cors(), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...outros } = user._doc;
        res.status(200).json(outros);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;