exports.getMainPage = (req,res)=>{


return exports.renderMainPage(req,res);

// return exports.mainwithCb(req,res,function(req,res,err){
//     res.render("mainPage.ejs",{
//         error:null,
//         dataReq:req,
//         dataRes:res,
//         title: "TITLE TEST"
//     });
//     if (err) {
//     res.render("mainPage.ejs",{
//         error:err
//     }); 
//    }   
// });
}

exports.renderMainPage = (req,res)=>{

    exports.mainpagePromise({req: req , res: res})
    .then(success =>{
         res.render("mainPage.ejs",{
             error:null,
             dataReq:success.req,
             dataRes:success.res,
             title: "TITLE TEST"
         })
    })
    .catch(err=>{
        res.render("mainPage.ejs",{
            error:err
        })
    })
}

//  exports.mainwithCb = function(req,res,cb) {
//     cb(req,res);
//  }

exports.mainpagePromise = (datas) =>{
    return new Promise((resolve,reject)=>{
        let req = datas.req;
        let res = datas.res; 
        let obj = {req,res} ;
        datas = obj ;
        resolve(datas);
    })
} 