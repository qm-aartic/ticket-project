const express = require('express');
const mongoose = require('mongoose');
const ecSchema = require('./routes/ecSchema');
const issues = require('./routes/issues');
const ticket = require('./routes/ticket');
const users = require('./routes/users');
const auth = require('./routes/auth');
const cors = require('cors');
const app = express();

app.use('/uploads',express.static('uploads'));
app.use(express.json());
app.use(cors());
app.use('/api/ecircum',ecSchema);
app.use('/api/issues',issues);
app.use('/api/ticket',ticket);
app.use('/api/users',users);
app.use('/api/auth',auth);


// connection to MongoDB
mongoose.connect('mongodb+srv://{USERNAME}:{PASSWORD}@cluster0.tdsacwm.mongodb.net/ticket')
    .then(() => {console.log('connected to MongoDB...')})
    .catch(err => {console.log('could not connect to MongoDB...', err)});
    
const port = 3000;

app.listen(port, () => {console.log('server is running')});
