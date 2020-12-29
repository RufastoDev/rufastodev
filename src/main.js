const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {ruta} = require('../src/routes/rutas');
const app = express();


// settings 
app.set('PORT', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares

app.use(ruta);

app.use(express.static(path.join(__dirname, 'public')));
// init server
app.listen(app.get('PORT'),() =>{
    console.log('Server on port', app.get('PORT'));
});