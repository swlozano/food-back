const express = require('express');
const router = express.Router();
const db = require('../persitence/db_setup')

router.get('/', function(req, res){
    
    db.getDiets().then(data=> res.json(data))
    
 });

 module.exports = router;
 
