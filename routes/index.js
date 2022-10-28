'use strict';
import express from 'express';
let router = express.Router();

/**
 * Get home page
 */
router.get('/', (req, res, next) => {
  res.render('index');
  next();
});

export { router };
