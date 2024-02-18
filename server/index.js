const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');  // Add this line
const User = require('./models/user')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ethSupplyChain')

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,  // Use hashed password
        })
        res.json({ status: 'ok' })
    } catch (err){
        res.json({ status: 'error', error: 'Email already exists' })
    }
})

app.post('/api/login', async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user && await bcrypt.compare(req.body.password, user.password)) {
            return res.json({ status: 'ok', user: true });
        } else {
            return res.json({ status: 'error', user: false });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Internal server error' });
    }
})

app.listen(5000, () => {
    console.log('Server started on 5000')
})
