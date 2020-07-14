const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();
const uri = process.env.MONGODB_URI;

// Bodyparser Middleware
app.use(express.json());

//Cors Middleare
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(() => console.log(err));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
}

app.use('/api/adduser', require('./routes/addUser'));
app.use('/api/getknives', require('./routes/getKnives'));
app.use('/api/addNewKnife', require('./routes/addNewKnife'));
app.use('/api/addForSale', require('./routes/addForSale'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
})
