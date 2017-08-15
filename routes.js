const express = require('express');
const router = express.Router();

const nodeuuid = require('node-uuid');

router.get('/', (req, res) => {
    res.send(200, [{
        "test": "oh yeah"
    }]);
});

router.get('/secretkey', (req, res) => {
    var secretKey = nodeuuid.v4();

    res.send(200, [{
        "secretKey": secretKey
    }]);
});

module.exports = router;