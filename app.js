const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json({ extended: false }));

const booksRoutes = require('./routes/api/books');
app.get('/', (req, res) => res.send('Hello world nahhhhaaaa!'));
app.use('/api/books', booksRoutes);
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
