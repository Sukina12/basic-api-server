'use strict';

const express = require('express');
const Food = require('../models/clothes');
const food= new Food;

let router = express.Router();

router.post('/', createFood);
router.get('/', readFood);
router.get('/:id', readSpecificFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

function createFood(req, res) {
  let foodObj = req.body;
  let resObj = food.create(foodObj);
  res.json(resObj);
}

function readFood(req,res){
  const resObj = food.read ();
  res.json(resObj);
}

function readSpecificFood (req,res){
  let id = req.params.id;
  let resObj =food.read(id);
  res.json(resObj);
}

function updateFood (req,res){
  let id = req.params.id;
  let foodObj = req.body;
  let resObj = food.update (id,foodObj);
  res.json(resObj);
}

function deleteFood (req,res){
  let id = req.params.id;
  let resObj = food.delete (id);
  res.json(resObj);
}

module.exports = router;