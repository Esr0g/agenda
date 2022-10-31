'use strict';
import express from 'express';
import { deleteUser } from "../middelware/auth.js";

let router = express.Router();

// Routes lorsque l'on est authentifié d'authentification
router.delete('/deleteUser', deleteUser);

export { router };