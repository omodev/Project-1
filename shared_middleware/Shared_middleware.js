let logger                  = require('morgan');


exports.loadMiddleware = (app)=>{
    app.use(logger("dev", {}));
}
