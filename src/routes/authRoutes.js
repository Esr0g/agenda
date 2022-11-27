'use strict';
import express from 'express';
import { deleteUser, logout } from "../middelware/auth.js";
import { addEvent, getEventParam, getEventUpdate } from '../middelware/myEventManager.js';

let router = express.Router();

// Routes lorsque l'on est authentifié d'authentification
router.get('/isAuthenticated', (req, res) => res.status(200).json({isAutenticated: true}));
router.delete('/deleteUser', deleteUser);
router.get('/logout', logout);
router.post('/addEvent', addEvent);
router.get('/getEventParam', getEventParam);
router.get('/getEventUpdate', getEventUpdate);

export { router };