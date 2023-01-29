const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log("db connected sucessfully");
})
.catch(err => console.log(err));


app.get('/', (req,res) => {
    res.status(httpStatus.OK).send({
        code : httpStatus.OK,
        message: 'Home route'
    });
});

app.use('/employees', require('./routes/employees'));

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});

module.exports = app;
