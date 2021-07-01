'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const clothes = new Clothes;

let router = express.Router();

router.post('/', createClothes);
router.get('/', readClothes);
router.get('/:id', readSpecificClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

function createClothes(req, res) {
  let clothesObj = req.body;
  let resObj = clothes.create(clothesObj);
  res.json(resObj);
}

function readClothes(req,res){
  const resObj = clothes.read ();
  res.json(resObj);
}

function readSpecificClothes (req,res){
  let id = req.params.id;
  let resObj = clothes.read(id);
  res.json(resObj);
}

function updateClothes (req,res){
  let id = req.params.id;
  let clothesObj = req.body;
  let resObj = clothes.update (id,clothesObj);
  res.json (resObj);
}

function deleteClothes (req,res){
  let id = req.params.id;
  let resObj = clothes.delete (id);
  res.json(resObj);
}

module.exports = router;
