const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const newsCatagories = require ('./data/catagories.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('react-news-portal-server');
});

app.get('/catagories', (req, res)=>{
    res.send(newsCatagories);
})

app.listen(port, ()=>{
    console.log('news-server-runing'); 
})