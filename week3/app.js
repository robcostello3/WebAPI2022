var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var bodyparser = require('body-parser')

var appRouter = require('./app_server/routes/index')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())


app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'hbs',
    helpers:{
        getShortComment(comment){
            if(comment.length < 64){
                return comment
            }
            return comment.substring(0, 60) + "..."
        },
        makeBold(name){
            return "<strong>" + name + "</strong>"
        },

        formatPhoneNumber(number){
            return "(" +number.substring(0,3) + ")" + number.substring(3,6) + "-" + number.substring(6)
        },

        formatEmailLink(email){
            return `<a href="mailto:${email}">${email}</a>`
        },

        formatCaptialize(word){
            return word.toUpperCase()
        }

    }
}))

app.set('view engine', 'hbs')

app.use('/', appRouter)

//app.post('/testData', , function(req, res){
//  res.render(200, "/profile", req.body)
//})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})