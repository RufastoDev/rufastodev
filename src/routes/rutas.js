const express = require('express');
const ruta = express.Router();


ruta.get('/',(req, res)=>{
    res.render('home', {title: 'Home | RufastoDev'});
});
ruta.get('/podcast',(req, res)=>{
    res.render('podcast',{title1: 'My Podcast'});
})
ruta.get('/support', (req,res)=>{
    res.render('support', {title2: 'Support me'});
});
module.exports = {
    ruta
};