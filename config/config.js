/**
 * @file Config file for the app
 * 
 */

  /**
 * Strict Mode.
 */
'use strict'

 /**
 * Module dependencies.
 */

let config = null; 

 exports.initConfig = ()=>{

    config = {} ; 
    config.port = 3000 ;
    config.db = {};
    config.db.port = 27017 ; 
    config.db.name = "dbApp" ;
    config.db.host = "localhost" ;

 };


// I was returning the function and not the return of the function 

// () to immediately call the function after declaration

 module.exports = function(){
     if(!config)
        exports.initConfig();

    return config ;  
 }() ;