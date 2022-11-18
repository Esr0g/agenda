/**
 * Midellware permettant de gérer la registration et la connexion ainsi que l'authentification
 */
import User from "../model/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = '4faad88a1224a227d1669d48602b60da0643b5f225d6b2b07e20198d6b1615a117c88a';

let userModel = new User();

/**
 * Permet de créer un compte
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export function register(req, res, next) {
    const { username, password } = req.body;

    if (password.length < 6) {
        return res.status(400).json({
            message: "L'utilisateur n'a pas pu être crée",
            error: "Mot de passe de moins de 6 caractères"
        });
    }

    try {
        
        if (userModel.findOne({ username })) {
            
            res.status(400).json({
                message: "Une erreur est survenue",
                error: "Nom d'utilisateur déjà utilisé."
            });
        } else {
            bcryptjs.hash(password, 10).then((hash) => {
                let user = userModel.add(userModel.createUser(username, hash));

                const maxAge = 3 * 60 * 60;
                
                const token = jwt.sign({
                    id: user.id,
                    username,
                }, jwtSecret, { expiresIn: maxAge });

                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000
                });
                
                res.cookie("ma", JSON.stringify({ username: user.username, id: user.id }), {
                    httpOnly: false,
                    maxAge: maxAge * 1000,
                    encode: String
                })

                res.status(200).json({
                    message: "Utilisateur crée avec succès",
                    username: user.username
                });
                next();
            });
        }
        
    } catch (error) {
        res.status(401).json({
            message: "L'utilisateur n'a pas pu être crée",
            error: error.message
        });
    }
}

/**
 * Permetde se connecter à un compte existant
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export function login(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Nom d'utilisateur ou mot de passe absent"
        })
    }

    try {
        let user = userModel.findOne({ username });

        if (!user) {
            res.status(401).json({
                message: "Impossible de se connecter",
                error: "Utilisateur inconnu"
            });
        } else {
            bcryptjs.compare(password, user.password).then((result) => {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign({
                        id: user.id,
                        username,
                    }, jwtSecret, { expiresIn: maxAge });

                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000
                    });

                    res.cookie("ma", JSON.stringify({ username: user.username, id: user.id }), {
                        httpOnly: false,
                        maxAge: maxAge * 1000,
                        encode: String
                    })

                    res.status(200).json({
                        message: "Connexion réussie",
                        username: user.username
                    });
                    next();
                } else {
                    res.status(400).json({
                        message: "Erreur de connexion",
                        error: "Mot de passe incorrect"
                    })
                }
            });  
        }
    } catch (error) {
        res.status(400).json({
            message: "Une erreur est survenue",
            error: error.message
        });
    }
}

/**
 * Permet de supprimer un utilisateur en fonction de son id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export function deleteUser(req, res, next) {
    let { id } = req.body;
    try {
        userModel.removeById(id);
        res.json({
            message: "Utilisateur supprimé"
        });
        next();
    } catch (error) {
        return res.status(400).json({
            message: "Une erreur est survenue",
            error: error.message
        });

    }
}

export function userAuth(req, res, next) {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({
                    message: "Une erreur est survenue",
                    error: "Vous n'avez pas les authorisations"
                });
            } else {
                next();
            }
        });
    } else {
        return res.status(401).json({
            messgae: "Une erreur est survenue",
            error: "Token invalide"
        });
    }
}

export function logout(req, res, next) {
    res.clearCookie("ma");
    res.clearCookie("jwt");
    res.status(200);
    next();
}