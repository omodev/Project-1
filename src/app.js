
/**
* @file Root server file.
* @version 1.0.0
* @author Omar
 */



 /**
 * Strict Mode.
 */
'use strict'



/**
 * Module dependencies.
 * 
 */

//const http = require('http');
const express = require('express') ;
//const fs = require("fs") ;
const logger = require("./sharedFeatures/logger"); 
const MongoClient = require('mongodb').MongoClient;
const config = require("../config/config");
const path = require("path") ;
const sharedMiddleware = require("../shared_middleware/Shared_middleware");




/**
 * Create Express server.
 */

 let app = express() ;

 

 /**
  * Express Config
  */
 app.set("port", config.port);
 app.set("views",path.join(__dirname, "views")); 
 app.set("view engine", "ejs") ;

/**
 * Loading middlewares
 */
sharedMiddleware.loadMiddleware(app);

/**
 * Router middleware
 */
let router = express.Router() ;



// MongoDB setup    -- Working with mongoDB native (No ORM)

/**
 * MongoDB Setup.
 */
const url = "mongodb://"+config.db.host+":"+config.db.port;

const dbClient = new MongoClient(url);

dbClient.connect((err)=>{

      logger.log("Connected Successfully to DB");
      const db = dbClient.db(config.db.name);
      dbClient.close();
      
});
    

/**
 * Creating routes
 */

 router.get("/",(req,res)=>{
      res.send("Root") ;
 });


 /**
 * Start Express server.
 */

 app.listen(app.get("port"),()=>{
      
        logger.log("Server listening on port " +app.get("port") +" and pid is " + process.pid) ;
 }) ;
app.use(router) ;
module.exports = app ; 