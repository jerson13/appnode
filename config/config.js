const promise = require('bluebird');
const { query } = require('express');
const option = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(option);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue){
    return stringValue;
});

const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgres',
    'password': 'Tuca@2024'
};

const db = pgp(databaseConfig);

module.exports = db;