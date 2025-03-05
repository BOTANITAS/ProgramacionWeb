const { DataSource } = require("typeorm");
const { Product } = require("../models/Products");

require("reflect-metadata");


const AppDataSource = new DataSource ({
    type:"mysql",
    host: "localhost",
    port: 3306,
    username:"",
    password:"",
    database:"",
    entities:[Product],
});

module.exports = {AppDataSource}