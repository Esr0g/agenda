'use strict';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

import { router as indexRouter } from './routes/index.js';
import { router as apiRouter } from './routes/api.js';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);


export { app };
