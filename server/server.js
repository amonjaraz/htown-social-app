const express = require('express');
var bodyParser = require('body-parser')

const {mongoose} = require("./db/mongoose");
var {User} = require('./models/User');

let app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3002;

app.post('/users', (req,res)=>{
    console.log(req.body);
    var user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    });

    user.save().then((doc)=>{
        res.send("User was added.")
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})