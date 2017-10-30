const pg_options = {};
const pgp = require('pg-promise')(pg_options); //pg_options
const monitor = require('pg-monitor');

monitor.attach(pg_options)

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: process.env.NODE_ENV === 'test' ? 'grocery_store_test' : 'grocery_store'
};

const db = pgp(connectionOptions);

//query functions 



const clodeConnection = () => {
  pgp.end();
};

module.exports = {
  
}