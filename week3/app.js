var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'hbs',
    helpers:{
        getShortComment(comment){
            if(comment.length < 64){
                return comment
            }
            return comment.substring(0, 60) + "..."
        }
    }
}))

app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render('home',{
        post:[
            {
            author:'Robert Costello',
            image:"https://picsum.photos/500/500",
            comments:[
                'This is the first comment',
                'Aliquip duis non velit enim sit incididunt fugiat quis deserunt. Culpa commodo fugiat reprehenderit amet ipsum velit cillum qui elit reprehenderit. Id excepteur amet exercitation ullamco aliqua mollit occaecat pariatur aliquip consectetur nulla sit. Culpa in commodo aute sit ea aliquip excepteur aute ipsum in. Do veniam in velit aliqua. Sunt ipsum pariatur voluptate proident deserunt duis ullamco irure tempor deserunt cillum labore occaecat dolor.',
                'Third comment'
            ]
        },
        {
            author:'Robert Costello',
            image:"https://picsum.photos/500/500?2",
            comments:[
                'This is the first comment',
                'This is second comment',
                'Id laborum occaecat eu qui dolor. Laboris veniam qui adipisicing dolore anim. Nisi nostrud aliqua cupidatat voluptate commodo enim. Eu incididunt reprehenderit eu consectetur.'
            ]
        }
    
    ]
    })
})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})