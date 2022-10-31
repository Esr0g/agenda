'use strict';
import fs from 'fs';
import _ from 'underscore';

/**
 * Singleton de gestion de la fausse base de donnée : pour ne pas avoir plusieur accès en même temps sur les fichiers
 * met automatiquement les id de chaque objet dans les tables
 */
class FDB {

    #path = "./public/data/";

    /**
     * Retourne l'instance unique de la classe FDB
     * @returns 
     */
    constructor() {
        if (FDB.exists) {
            return FDB.instance;
        }

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
     * La chaine de caractère doit être de la forme : int\n[obj, obj, ...] ou obj sont des objets avec obligatoirement un 
     * champ id et int est le dernier entier utilisé.
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
                obj.id = 0;
                let tab = [obj];
                this.#writeFile(table, "0\n"+ JSON.stringify(tab));
            } else {
                data = data.split("\n");
                data[0]++;
                obj.id = data[0];

                if (_.find(JSON.parse(data[1]), objT => objT.id === obj.id)) {
                    throw new Error("Impossible d'ajouter un élément à une table avec des id identique : " + obj.id);
                } else {
                    data[1] = data[1].slice(0, -1);
                    data[1] += "," + JSON.stringify(obj) + "]";
                    this.#writeFile(table, data[0] + "\n" + data[1]);
                } 
            }

            return obj;
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
            data = data.split("\n")
            return JSON.parse(data[1]);
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
                data = data.split("\n");
                data[1] = _.reject(JSON.parse(data[1]), (obj) => obj.id === id);
                if (data[1].length === 0) {
                    this.#writeFile(table, "");
                } else {
                    this.#writeFile(table, data[0] + "\n" + JSON.stringify(data[1]));
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
                data = data.split("\n");
                data = _.find(JSON.parse(data[1]), (obj) => obj.id === id);
                if (!data || data.trim === "") {
                    return false;
                }

                return data;
            }

        } catch (error) {
            throw error;
        }
    }

    /**
     * Permet de mettre a jour un objet dans la table choisie
     * @param {*} table 
     * @param {*} id 
     */
     update(table, obj) {
        try {
            this.#tableExists(table);

            let data = this.#readFile(table);

            if (data.trim === "") {
                throw new Error("Impossible de supprimer un élément d'un table vide");
            } else {
                data = data.split("\n");
                let objTmp = _.find(JSON.parse(data[1]), (objT) => objT.id === obj.id);

                if (!objTmp || data.objTmp === "") {
                    throw new Error("Impossible de mettre à jour un objet qui n'existe pas.");
                }

                data[1] = _.reject(JSON.parse(data[1]), (objT) => objT.id === obj.id);
                data[1].push(obj);
                data[1] = _.sortBy(data[1], 'id');

                this.#writeFile(table, data[0] + "\n" + JSON.stringify(data[1]));

            }
        } catch (error) {
            throw new error;
        }
    }
    
    /**
     * Retourne l'objet qui matche toutes les paries de clé-valeur listé dans properties
     * @param {*} table 
     * @param {*} properties 
     * @returns 
     */
    findOne(table, properties) {
        this.#tableExists(table);

        try {
            this.#tableExists(table);

            let data = this.#readFile(table);

            if (data.trim === "") {
                return false;
            } else {
                data = data.split("\n");
                return data = _.findWhere(JSON.parse(data[1]), properties);
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

let fdb = new FDB();

export { fdb as default };