import express  from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import bodyParser from "body-parser";

// load config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;


// Run Server
const server = express();
const port = process.env.PORT || 5000;
server.listen(
    PORT, 
    console.log("Servidor rodando no ambiente de " + process.env.NODE_ENV + "na porta" +  PORT + "....")
);


//Routes

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(router);

