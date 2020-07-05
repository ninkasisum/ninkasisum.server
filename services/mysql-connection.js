const mysql = require('mysql');

module.exports = {
    async build() {    
        // Your dumb pseudo hacker, this is just a test database 
        return mysql.createConnection({
            host: "sql9.freemysqlhosting.net",
            database: "sql9352176",
            user: "sql9352176",
            password: "24VsW6V4xF"
        });
    }
}