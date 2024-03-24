const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const router = express.Router();

const {User, validateUser} = require('../models/users');


router.post('/', async(req,res) => {

    console.log(req.body);

    const {error} = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check for unique email ID
    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send("User already registered");

    user = new User(_.pick(req.body,['name','email','password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();

    res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(_.pick(user,['_id','name','email','isAdmin']));
})

module.exports = router;