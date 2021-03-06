const express = require('express');
const port = process.env.PORT || 3000;
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const indexRouter = require('./routes/index');
const roomsRouter = require('./routes/rooms');
const recipesRouter = require('./routes/recipes');
const commentsRouter = require('./routes/comments');
const methodOverride = require('method-override');



require('dotenv').config();
require('./config/database');
require('./config/passport');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
//configure and mount middleware for oauth//
app.use(methodOverride("_method"));
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret:'YOYOBEANS!',
    resave: false,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/rooms',roomsRouter);
app.use('/recipes',recipesRouter);
app.use('/', commentsRouter);
app.use('/', indexRouter);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log(`Express is listening on port ${port}, Beansie`);

});
 
