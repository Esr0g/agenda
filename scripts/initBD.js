'use strict';
import fdb from "../lib/fakeDB.js";

// Initialisation de FDB
fdb.createTable('users');

let initTables = true;
if (initTables) {
    let nb0 = 0;
    for (let i = 0; i < 100; i++) {
        let user = {
            id: i,
            name: 'user_' + i
        };

        fdb.add('users', user);   
    }
}