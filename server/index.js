const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');

app.use(cors());
app.use(express.json());

const mongoAtlasUri = 'mongodb+srv://rahularora2715:63MLdcqX3kak8enI@supplychaincluster.mhb3109.mongodb.net/?retryWrites=true&w=majority&appName=SupplyChainCluster';
mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });

app.post('/api/register', async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: 'Some error occurred' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      return res.json({ status: 'ok', user: true });
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (err) {
    console.error(err);
    res.json({ status: 'error', error: 'Internal server error' });
  }
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
  });

app.listen(5000, () => {
  console.log('Server started on 5000');
});
