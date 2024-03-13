const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function (user) {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get('/username/:username', (req, res) => {
    const username = req.params.username;
    const user = users.find(user => user.username === username);
    if (user) {
        res.send(user.email);
    } else {
        res.status(404).json({ error: { message: 'User not found', status: 404 } });
    }
});

module.exports = router;