'use strict';
import fdb from "../lib/fakeDB.js";

// Initialisation de FDB
fdb.createTable('users');
fdb.createTable('events');