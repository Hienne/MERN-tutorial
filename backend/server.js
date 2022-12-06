const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB()

const app = express();

// setup middleware cần dùng
app.use(express.json());    // parse body thành object json
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoute'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server start at on port: ${port}`));
