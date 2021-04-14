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
  steps */

router.post('/', function(req, res){
   console.log("Body",req.body)
   db.createRecipe(req.body)
   res.send('POST Recipe');
});

module.exports = router;