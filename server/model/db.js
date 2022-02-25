const {Pool} = require('pg');

const PG_URI = 'postgres://zsffdzzk:0LyNN8Hm5JZ6IEjORhSFw9tPLviVDHx3@jelani.db.elephantsql.com/zsffdzzk';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text,params,callback) => {
        return pool.query(text,params,callback);
    }
};