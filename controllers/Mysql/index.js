const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'vacinapp',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8mb4',
            useUTC: false, // for reading from database
            dateStrings: true,
            typeCast(field, next) { // for reading from database
                if (field.type === 'DATETIME') {
                    return field.string();
                }
                return next();
            },
        },
    },
);

const db = {};

fs
    .readdirSync(path.join(__dirname, '../../models'))
    .filter(file => (file.indexOf('.') !== 0 && (file !== "index.js")))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, '../../models', file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
