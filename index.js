require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

const app = express(); 
app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
