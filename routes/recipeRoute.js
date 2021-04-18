const express = require('express');
const router = express.Router();
const db = require('../persitence/db_setup')

router.get('/', function(req, res){
   res.send('GET recipe');
});

  /* name
  summary
  score
  healthyLevel
  steps 
  dietTypes
  */

router.post('/', function(req, res){
   //console.log("body---------->",req.body)
   db.createRecipe(req.body).then(data=>res.json(data))
});

module.exports = router;