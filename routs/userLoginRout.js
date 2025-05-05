const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModal = require('../modal/userModal');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // await for DB call
        const user = await userModal.findOne({ username });

        // if no user OR user is not admin
        if (!user || user.role !== "admin") {
            return res.status(401).json({ message: "Invalid credentials or not an admin" });
        }

        // compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // generate token
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // send token
        return res.status(200).json({ token });

    } catch (error) {
        console.error("SERVER ERROR:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
