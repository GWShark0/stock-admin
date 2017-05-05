const bluebird = require('bluebird');
const pgPromise = require('pg-promise');
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const options = { promiseLib: bluebird };
const pgp = pgPromise(options);

const connection = `${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const database = pgp(connection);

module.exports = database;
