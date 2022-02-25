const path = require('path');
const express = require('express');
const cors = require('cors');
const db = require('./model/db');

const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../src')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// app.use('/main', (req,res)=>{
//     const p = path.join(__dirname,'../src');
//     return res.render(path.join(p+'/main.html'));
// });

// app.use('/logout', (req,res)=>{
//     const p = path.join(__dirname,'../src');
//     return res.render(path.join(p+'/index.html'));
// });

app.get('/messages', async (req,res)=>{
    try{
        const query = 'SELECT * FROM messages';
        const result = await db.query(query);
        res.locals.data = [];
        result.rows.map(data=>res.locals.data.push(data));
        return res.status(200).send(res.locals.data);
    }
    catch(err){
        return next({
            log: 'Error in heroes.updateHero Controller',
            message: 'Cant update hero'
        });
    }
});

app.post('/addmessage', async (req,res)=>{
    try{
        const query = 'INSERT INTO messages (message,created_by) VALUES ($1,$2)';
        const {message, created_by} = req.body;
        const result = db.query(query,[message,created_by]);
        return res.status(200).send('Message added');
    }
    catch(err){
        return next({
            log: 'Error in heroes.updateHero Controller',
            message: 'Cant update hero'
        });
    }
});

app.use('*', (req,res)=>{
    return res.status(404).send('Wrong request');
});

app.use((err,req,res,next)=>{
    const defaultError = {
        log: 'Global error handler',
        status: 500,
        message: `${err}`
    }
    const Error = Object.assign({},defaultError,err);
    return res.status(Error.status).json(Error.message);
});


app.listen(3000, ()=>{
    console.log('Server started at PORT 3000');
});

module.exports = app;
