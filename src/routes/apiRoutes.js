'use strict';
import express from 'express';
import { register, login } from "../middelware/auth.js";

let router = express.Router();

// Routes accessible à tous le monde
router.post('/register', register);
router.post('/login', login);

// Route de test
router.get('/test', (req, res, next) => {
    res.status(200).json({ message: "Test working" });
});

export { router };
