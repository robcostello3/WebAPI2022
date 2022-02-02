var home = function(req, res){
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
}

var contact = function(req, res){
    res.render('titleTest', {title:"Contact"})
}

var about = function(req, res){
    res.render('titleTest', {title:"About"})
}

var profile = function(req, res){
    res.render('profile', {name:"robert",
email:"robert@email.neit",
phonenumber:"401-442-7761",
address:"1 New England Tech Blvd, East Greenwich, RI",
job:"Game Programmer"})
}


module.exports = {
    home,
    contact,
    about,
    profile
}