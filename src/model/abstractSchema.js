'use strict';
import fdb from "../../lib/fakeDB.js";
import dayjs from "dayjs";

/**
 * Classe abstraitre qui représente l'ensemble des schéma et implémente un bon nombre de fonction récurente
 */
export default class AbstractSchema {

    #table;

    /**
     * Cette classe ne peut pas être instanciée directement.
     */
    constructor() {
        if (this.constructor == AbstractSchema) {
            throw new TypeError('La classe abstraite "AbstractSchema" ne peut pas être instanciée directement.');
        }
    }

    /**
     * défini le nome de la table utilisée
     */
    set table(table) {
        this.#table = table;
    }

    /**
     * Ajoute un objet a la table liée au schéma et ajoute une date de création et de modification.
     * @param {*} obj 
     */
    add(obj) {
        obj.date_creation = dayjs().toJSON();
        obj.date_modification = dayjs().toJSON();
        return fdb.add(this.#table, obj);
    }

    /**
     * Retourne l'ensemble de la table liée au schéma
     */
    getAll() {
        fdb.getAll(this.#table);
    }

    /**
     * Retourne un élément dela table liée en fonction de son id.
     * @param {*} id 
     */
    getById(id) {
        fdb.getById(this.#table, id);
    }
    
    /**
     * Supprime un élément de la table liée au schéma par son id
     * @param {*} id 
     */
    removeById(id) {
        fdb.removeById(this.#table, id);
    }

    /**
     * Met à jour l'objet dans la table liée
     * @param {} obj 
     */
    update(obj) {
        obj.date_modification = dayjs().toJSON();
        fdb.update(this.#table, obj);
    }

    /**
     * Retourne le premier objet qui matche l'ensemble des paires clé-valeurs dans properties
     * @param {*} properties 
     */
    findOne(properties) {
        return fdb.findOne(this.#table, properties);
    }

    /**
     * Retourne tous les objets qui match les propriétés
     * @param {*} properties 
     * @returns 
     */
    findAll(properties) {
        return fdb.findAll(this.#table, properties);
    }

}