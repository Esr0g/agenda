'use strict';
import AbstractSchema from "./abstractSchema.js";

/**
 * Model représenant les utilisateurs et permet leur gestion
 */
export default class User extends AbstractSchema {

    constructor() {
        super();
        
        this.table = 'users'
    }

    createUser(username, password) {
        let user = {
            username,
            password
        }

        return user;
    }
}