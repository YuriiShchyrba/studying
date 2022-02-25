const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000, ()=>{
    console.log('Server started at PORT 3000');
});

module.exports = app;
