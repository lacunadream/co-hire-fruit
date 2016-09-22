require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const routes = require('./controllers/baseroutes');

let app = express();

// MongoDB
mongoose.connect(process.env.MONGO_ACCESS);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB Connection Error - ${err}`);
});

app.set('view engine', 'pug');

app.set('port', process.env.PORT || 5000);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

// Catch 404s and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Error handlers - for Dev (will print stacktrace)
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;