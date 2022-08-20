const bcrypt = require('bcrypt');
const User = require("../models/User");
const router = require('express').Router();

router.post("/cadastro", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();  
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
}); 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.json("Credenciais Erradas");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.json("Credenciais Erradas");

        const { password, ...outros } = user._doc;
        res.status(200).json(outros);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;