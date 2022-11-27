'use strict';
import User from "../model/user.js";
import MyEvent from "../model/myEvent.js";
import { EventEmitter } from 'node:events';
import dayjs from 'dayjs';
import _ from 'underscore';

let userModel = new User();
let eventModel = new MyEvent();
let eventEmitter = new EventEmitter();

/**
 * Permet de créer un event et de l'ajoutet dans FDB
 * @param {} req 
 * @param {*} res 
 * @param {*} next 
 */
export function addEvent(req, res, next) {
    let { userID, dateDeb, dateFin, name, adresse, description, allDay } = req.body;

    try {
        if (userID.toString().trim() === "") {
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
            
            let event = eventModel.add(eventModel.createEvent(userID, dateDeb, dateFin, name, adresse, description, allDay));

            eventEmitter.emit('event_changes', event);

            res.status(200).json({
                message: "Evénement crée avec succès",
                event
            });

            next();
        }
    } catch (err) {
        res.status(400).json({
            message: "Une erreur est survenue",
            error: err.message
        });
    }
    
}

/**
 * Récupère tous les événements liés à l'id d'un utilisateur en fonctions de paramètres
 * précisé
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export function getEventParam(req, res, next) {
    // Method GET donc utilisation de req.query !!
    let { userID, dateDeb, dateFin } = req.query;

    userID = parseInt(userID);

    try {
        if (userID.toString().trim() === "") {
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
            let events = eventModel.findAll({ userID });
            let date1 = dayjs(dateDeb);
            let date2 = dayjs(dateFin);

            let newEvents = [];
            if (events) {
                for (let evt of events) {
                    let date = dayjs(evt.dateDeb)
                    if ((date.isSame(date1, 'day') || date.isAfter(date1, 'day')) && (date.isSame(date2, 'day') || date.isBefore(date2, 'day'))) {
                        newEvents.push(evt);
                    }
                }
            }  

            res.status(200).json({
                message: "Evénement crée avec succès",
                newEvents
            });
        } 
    } catch (error) {
        res.status(400).json({
            message: "Une erreur est survenue",
            error: error.message
        });
    }
    
}

export function getEventUpdate(req, res, next) {
    const responseHandler = (changes) => {
        res.json(changes);
        eventEmitter.removeListener('event_changes', responseHandler);
    };

    eventEmitter.on('event_changes', responseHandler);
}