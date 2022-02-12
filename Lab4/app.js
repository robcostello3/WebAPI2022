var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.engine('hbs', exphbs.engine({
  extname:'hbs',
  helpers:{
    CreateTable(size){

      for(let i = 0; i < size; i++){
        let row = document.createElement('tr');
        for(let j = 0; j < size; j++){
          var color = ((1<<24)*Math.random()|0).toString(16);
          let heading = document.createElement('th');
          let brk = document.createElement('br');
          heading.innerHTML = color;
          heading.appendChild(brk);
          let spn = document.createElement('span')
          spn.innerHTML = color;
          spn.style.color = ffffff;
          heading.appendChild(spn);
          heading.style.backgroundColor = color;
          row.appendChild(heading);

        }
        document.getElementById('tbody').appendChild(row);
      }
      

      //<tr>
        //    <td style="background-color: #ffffff" id="table11">ffffff<br/><span style="color: #ffffff" id="span11">ffffff</span></td>
      //</tr>

      

    }
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post('/testData', function(req, res){
  res.render(200, "/table", req.body)
})

module.exports = app;
