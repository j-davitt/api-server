'use strict';

const express = require('express');

const { clothesModel } = require('../models');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesModel.findAll();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    const newClothes = await clothesModel.create(req.body);
    res.status(201).send(newClothes);
  } catch (error) {
    next(error);
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  try {
    const clothes = await clothesModel.findById(req.params.id);
    res.status(200).send(clothes);
  } catch (error) {
    next(error);
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const updatedClothes = await clothesModel.update(req.params.id, req.body);
    res.status(200).send(updatedClothes);
  } catch (error) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const deletedClothes = await clothesModel.destroy(req.params.id);
    res.status(200).send(deletedClothes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
