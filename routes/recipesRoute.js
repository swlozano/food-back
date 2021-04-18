const express = require('express');
const router = express.Router();
const db = require('../persitence/db_setup')

//Get by params name
router.get('/', function(req, res){
   db.getRecipeByName(req.query.name).then(data=>res.json(data))
});

//Get by Id
router.get('/:id', function(req, res){
   db.getRecipeById(req.params.id).then(data=>res.json(data))

});


module.exports = router;