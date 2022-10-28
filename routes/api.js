'use strict';
import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/test', (req, res, next) => {
  res.json({ title: 'Ceci est un test', message: 'Testons tout ça' });
});

router.post('/post', (req, res, next) => {

  console.log(req.body);
  res.status(200).send();
});

export { router };
