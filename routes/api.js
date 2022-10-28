'use strict';
import express from 'express';
import fdb from '../lib/fakeDB.js';

let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/test', (req, res, next) => {
  let obj = fdb.getById('users', 20);
  console.log(obj);
  res.json({ title: 'Ceci est un test', message: obj.name });
});

router.post('/post', (req, res, next) => {

  console.log(req.body);
  res.status(200).send();
});

export { router };
