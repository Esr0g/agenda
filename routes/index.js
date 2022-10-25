import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', message: 'Hello there !' });
});

router.get('/test', (req, res, next) => {
  res.render('test', { title: 'Ceci est un test', message: 'Testons tout' });
});

export { router };
