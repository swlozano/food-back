
const express = require('express')
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(express.json())
app.use('/recipe', recipeRoute)
app.use('/recipes', recipesRoute)
app.use('/types', typesRoute)

app.listen(3000, function () {
  console.log("App Start")
})

app.get("/", function (req, res) {
  res.send("Home")
})

app.post("/", function (req, res) {
  console.log(req)
  res.json({ "res": "req" })
})

exports.db = db
