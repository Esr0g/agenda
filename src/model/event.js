'use strict';
import AbstractSchema from "./abstractSchema.js";

/**
 * Model représenant les événements
 */
export default class Event extends AbstractSchema {

    constructor() {
        super();
        
        this.table = 'events'
    }

    createEvent(userID, date, name, adresse, heureDeb, heureFin, description, allDay) {
        let event = {
            userID,
            date,
            name,
            adresse,
            heureDeb,
            heureFin,
            description,
            allDay
        }

        return event;
    }
}