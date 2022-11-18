'use strict';
import User from "../model/user.js";
import Event from "../model/event.js"

let userModel = new User();
let eventModel = new Event();

export function addEvent(req, res, next) {
    let { userID, date, name, adresse, heureDeb, heureFin, description, allDay } = req.body;

    try {
        if (userID.trim() === "") {
            res.status(400).json({
                message: "Une erreur est survenue",
                error: "Il manque l'id de l'utilisateur"
            });
        } else if (!userModel.findOne({ id: userID })) {
            res.status(400).json({
                message: "Une erreur est survenue",
                error: "L'utilisateur n'existe pas"
            });
        } else {
            
            let event = eventModel.add(eventModel.createEvent(userID, date, name, adresse, heureDeb, heureFin, description, allDay));

            res.status(200).json({
                message: "Evénement crée avec succès",
                event
            });
    
        }
    } catch (err) {
        res.status(400).json({
            message: "Une erreur est survenue",
            error: err.message
        });
    }
    
}