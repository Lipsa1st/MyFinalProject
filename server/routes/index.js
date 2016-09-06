var express = require('express');
var router = express.Router();
var EmpData = require('../models/empData');

//.........................Saving Email......................

router.post('/saveBut',function(req, res, next){
    console.log(req.body);
    if(req.body){
        var mymsg = new EmpData();
         mymsg.wave = req.body.wave;
         mymsg.name=  req.body.name;
         mymsg.email=  req.body.email;
         mymsg.phone=  req.body.phone;
         mymsg.url= req.body.url;
         mymsg.empcode=  req.body.empcode;
         mymsg.empDep=  req.body.empDep;
         mymsg.empDesig=  req.body.empDesig;
         mymsg.skills=  req.body.skills;
         mymsg.exp=  req.body.exp;
         mymsg.save(function(err, mymsg){
             if(err){
                 return console.error(err);
             }
        
         })
}
else{
 console.log("Data not found");
}
});

//.........................Getting All Emails.....................

router.get('/showData', function(req,res,next){
    EmpData.find(function(err, docs){
        if(docs){
            res.json(docs);
        }
        else{
            console.log(err);
        }
    })
});

module.exports = router;
