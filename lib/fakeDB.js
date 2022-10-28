'use strict';
import fs from 'fs';
import _ from 'underscore';

/**
 * Singleton de gestion de la fausse base de donnée : pour ne pas avoir plusieur accès en même temps sur les fichiers
 */
export default class FDB {

    #path;

    /**
     * Retourne l'instance unique de la classe FDB
     * On doit lui associé un path lors du premier appel
     * @param {*} path 
     * @returns 
     */
    constructor(path) {
        if (FDB.exists) {
            return FDB.instance;
        }

        this.#path = path;
        FDB.instance = this;
        FDB.exists = true;
        return this;
    }

    get path() {
        return this.#path;
    }

    set path(newPath) {
        this.#path = newPath;
    }

    /**
     * Permet de lire le fichier correspondant au nom sans l'extension (fichier .json) et retourne une chaine
     * de caractère.
     * @param {*} name nom du fichier sans extension
     */
    #readFile(name) {
        try {
            let data = fs.readFileSync(this.#path + name + '.json', 'utf-8');
            return data;
        } catch (error) {
            throw error;
        }
    }
     
    /**
     * Permet d'écrire dasn un fichier avec le nom qui correspond sans l'extension. 
     * La chaine de caractère doit être de la forme : [obj, obj, ...] ou obj sont des objets avec obligatoirement un 
     * champ id.
     * @param {*} name 
     */
    #writeFile(name, str) {
        try {
            fs.writeFileSync(this.#path + name + '.json', str,'utf-8');
        } catch (error) {
            throw error;
        }
    }

    /**
     * Crée un fichier {name}.json dans le dossier ./public/data si il n'existe pas.
     * @param {*} name 
     */
    createTable(name) {
        let path = this.#path + name + ".json"
        try {
            if (!fs.existsSync(path)) {
                fs.openSync(path, 'a');
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Ajoute l'élément obj à la table
     * @param {*} table sur laquelle ajouter un objet
     * @param {*} obj objet à ajouter
     */
    add(table, obj) {
        this.#tableExists(table);

        try {
            let data = this.#readFile(table);
            if (data.trim() === "") {
                let tab = [obj];
                this.#writeFile(table, JSON.stringify(tab));
            } else {
                if (_.find(JSON.parse(data), objT => objT.id === obj.id)) {
                    throw new Error("Impossible d'ajouter un élément à une table avec des id identique.")
                } else {
                    data = data.slice(0, -1);
                    data += "," + JSON.stringify(obj) + "]";
                    this.#writeFile(table, data);
                } 
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retourne un table entière sous la forme d'un tableau
     * @param {*} table 
     */
    getAll(table) {
        this.#tableExists(table);

        try {
            let data = this.#readFile(table);
            return JSON.parse(data);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Supprilme un élément de la table par son id
     * @param {*} table 
     * @param {*} id 
     */
    removeById(table, id) {
        try {
            this.#tableExists(table);

            let data = this.#readFile(table);

            if (data.trim === "") {
                throw new Error("Impossible de supprimer un élément d'un table vide");
            } else {
                data = _.reject(JSON.parse(data), (obj) => obj.id === id);
                if (data.length === 0) {
                    this.#writeFile(table, "");
                } else {
                    this.#writeFile(table, JSON.stringify(data));
                }
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retourne l'élément avec l'id voulue, false sinon
     * @param {*} id 
     */
    getById(table, id) {
        try {
            this.#tableExists(table);

            let data = this.#readFile(table);

            if (data.trim === "") {
                throw new Error("Impossible de supprimer un élément d'un table vide");
            } else {
                data = _.find(JSON.parse(data), (obj) => obj.id === id);

                if (!data) {
                    return false;
                }

                return data;
            }

        } catch (error) {
            throw error;
        }
    }

    /**
     * Lance une erreur si la table n'existe pas
     * @param {*} table 
     */
    #tableExists(table) {
        let path = this.#path + table + ".json";
        if (!fs.existsSync(path)) {
            throw new Error(`La table "${table}" n'existe pas.`);
        }
    }
}