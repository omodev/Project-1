exports.getMainPage = (req,res)=>{


   return exports.renderMainPage(req,res);
}

exports.renderMainPage = (req,res)=>{

    exports.mainpagePromise({req: req , res: res})
    .then(success =>{
         res.render("mainPage.ejs",{
             error:null,
             dataReq:success.req,
             dataRes:success.res
         })
    })
    .catch(err=>{
        res.render("mainPage.ejs",{
            error:err
        })
    })
}

exports.mainpagePromise = (datas) =>{
    return new Promise((resolve,reject)=>{
        let req = datas.req;
        let res = datas.res; 

        return resolve(datas);
    })
}