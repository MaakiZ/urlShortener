const mongoose = require('mongoose');

const db_url = process.env.DB_URL;
//local development
//const db_url = `mongodb://localhost:27018/plm_db`;

const options = {
    useFindAndModify: false,
    reconnectTries: 30,
    reconnectInterval: 500,
    useNewUrlParser: true
};
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        console.log(db_url);
        mongoose
            .connect(db_url, options)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.log(err);
                console.error('Database connection error');
            });
    }
}

module.exports = new Database();
