'use strict';
import AbstractSchema from "./abstractSchema.js";

/**
 * Model représenant les événements
 */
export default class MyEvent extends AbstractSchema {

    constructor() {
        super();
        
        this.table = 'events'
    }

    createEvent(userID, dateDeb, dateFin, name, adresse, description, allDay) {
        let event = {
            userID,
            dateDeb,
            dateFin,
            name,
            adresse,
            description,
            allDay
        }

        return event;
    }
}