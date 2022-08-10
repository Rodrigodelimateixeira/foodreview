import express  from "express";
import dotenv from "dotenv";
import connect from './config/db.js';

// load config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;


// Run Server
const server = express();
server.listen(
    PORT, 
    console.log("Servidor rodando no ambiente de " + process.env.NODE_ENV + "na porta" +  PORT + "....")
);

// connect to the database

connect();

//Routes
