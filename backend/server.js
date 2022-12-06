const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT;

const app = express();

// setup middleware cần dùng
app.use(express.json());    // parse body thành object json
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoute'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server start at on port: ${port}`));
