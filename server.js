
const express= require('express')
const db = require('./persitence/db_setup')
const recipeRoute = require('./routes/recipeRoute')
const recipesRoute = require('./routes/recipesRoute')
const typesRoute = require('./routes/typesRoute')


db.startDb()

const app = express()
//app.use(express.static('public'))
app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())
app.use('/recipe',recipeRoute)
app.use('/recipes',recipesRoute)
app.use('/types',typesRoute)

app.listen(3000,function(){
    console.log("App Start")
})

app.get("/",function(req,res   ){
    res.send("Home")
})

app.post("/",function(req,res){
    console.log(req)
    res.json({"res":"req"})
})

exports.db = db
