'use strict';

const express = require('express');

const { clothesCollection } = require('../models');

const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesCollection.read();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    const newClothes = await clothesCollection.create(req.body);
    res.status(201).send(newClothes);
  } catch (error) {
    next(error);
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  try {
    const clothes = await clothesCollection.read(req.params.id);
    res.status(200).send(clothes);
  } catch (error) {
    next(error);
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const updatedClothes = await clothesCollection.update(req.body, req.params.id);
    res.status(200).send(updatedClothes);
  } catch (error) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    await clothesCollection.delete(req.params.id);
    res.status(200).send('Deleted clothes');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
