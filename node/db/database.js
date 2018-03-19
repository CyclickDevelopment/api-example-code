var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'application_database',
    user: 'cyclick',
    password: 'development',
    database: 'node_js_app'
});

connection.connect();

module.exports = {
    employees: {
        get: (id) => { }
    },
    equipment: {
        all: () => { },
        get: (id) => { },
        checkout: (id, employee) => { },
        return: (id) => { }
    },
    admin: {
        employees: {
            all: () => { },
            create: (details) => { },
            modify: (id, details) => { },
            delete: (id) => { }
        },
        equipment: {
            create: (details) => { },
            modify: (id, details) => { },
            delete: (id) => { }
        }
    }
};