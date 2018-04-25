const startDebugger = require('debug')('app:startup');
const morgan= require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const express = require('express');
const app = express();
const courses= require('./routes/courses');
const home= require('./routes/home');

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/',home);
app.use('/api/courses',courses);

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    
}
startDebugger("Morgan Enabled");




const port = process.env.PORT || 3000;

app.listen(port,()=>console.log('Listening on port '+port+'...'));