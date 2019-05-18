
/**
* @file Root server file.
* @version 1.0.0
* @author Omar
 */

'use strict'    // Strict Mode


/**
 * Module dependencies.
 */

const http = require('http');
const fs = require("fs") ;
const logger = require("./sharedFeatures/logger")

/**
* Creating the http server
*/
var server = http.createServer((req, res)=> {

    // Create a readStream (source from which we can read)
     var readStream = fs.createReadStream(__dirname+"/data.txt");

     // Pipe whatever is being read from the source to the res
      readStream.pipe(res) ;

}); 

server.listen(3000,()=>{
      
       logger.log("Server listening on port 3000 and pid is " + process.pid) ;
}) ;