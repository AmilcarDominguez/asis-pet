const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_asispet', 'postgres', 'admin1234', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

const testConection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to "bd_asispet" has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConection();

const db = {
    Sequelize,
    sequelize
}
module.exports = db;