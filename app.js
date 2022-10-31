'use strict';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

import { userAuth } from './src/middelware/auth.js';
import { router as indexRouter } from './src/routes/index.js';
import { router as apiRouter } from './src/routes/apiRoutes.js';
import { router as authRouter } from './src/routes/authRoutes.js';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api/auth', userAuth, authRouter);

// Gestion de toutes les autres routes indéfinie : erreur
app.get('*', (req, res, next) => {
    res.status(404).send("<h1>Error 404 not found.</h1>");
})

export { app };
