const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Directly setting the port number

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/userlist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  try {
    await newUser.save();
    res.status(201).send('User added');
  } catch (error) {
    res.status(400).send('Error adding user');
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).send('Error fetching data');
  }
});

app.delete('/api/data/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
  } catch (error) {
    res.status(400).send('Error deleting user');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
