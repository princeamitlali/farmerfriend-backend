const express=require('express');
const router=express.Router();
const {HelplineSchema}= require('../models/Helplines')
const {schemeSchema} = require('../models/Schemes')
const {SoilSchema}=require('../models/soilSchema')
const {mandischema} = require("../models/mandi")
 

// SoilSchema Route

router.get('/SoilSchema',(req,res,next)=>{
    // SoilSchema.find(function(err,SoilSchema){
    //     res.json(SoilSchema);
    // })
    SoilSchema.find({"STATE":"Bihar"},function(err,data){  
        if(err){  
            res.send(err);  
        }  
        else{                
            res.send(data);
            }  
    }); 
    
});


router.post('/SoilSchema',(req,res,next)=>{
    let newsoilSchema=new SoilSchema({
        // userName:req.body.userName,
        // password: req.body.password
    });
    SoilSchema.save((err,SoilSchema)=>{
        if(err)
        {
            res.json({msg: 'Failed to login'});
        }
        else{
            res.json({msg: 'admin logged in successfully'});
        }
    })
});



//helplineSchema route
router.get('/HelplineSchema',(req,res,next)=>{
    HelplineSchema.find(function(err,HelplineSchema){
        res.json(HelplineSchema);
    }); 
});



router.post('/HelplineSchema',(req,res,next)=>{
    let newHelpline=new HelplineSchema({
        // userName:req.body.userName,
        // password: req.body.password
    });
    HelplineSchema.save((err,HelplineSchema)=>{
        if(err)
        {
            res.json({msg: 'Failed to login'});
        }
        else{
            res.json({msg: 'admin logged in successfully'});
        }
    })
});



//SchemesSchema Route

router.get('/schemeSchema',(req,res,next)=>{
    schemeSchema.find(function(err,schemeSchema){
        res.json(schemeSchema);
    }); 
});


router.post('/schemeSchema',(req,res,next)=>{
    let newschemeSchema=new schemeSchema({
        // userName:req.body.userName,
        // password: req.body.password
    });
    schemeSchema.save((err,schemeSchema)=>{
        if(err)
        {
            res.json({msg: 'Failed to login'});
        }
        else{
            res.json({msg: 'admin logged in successfully'});
        }
    })
});




//mandiSchema route

router.get('/mandischema',(req,res,next)=>{
    mandischema.find(function(err,mandischema){
        res.json(mandischema);
    }); 
});


router.post('/mandischema',(req,res,next)=>{
    let newmandiSchema=new mandischema({
        // userName:req.body.userName,
        // password: req.body.password
    });
    mandischema.save((err,mandischema)=>{
        if(err)
        {
            res.json({msg: 'Failed to login'});
        }
        else{
            res.json({msg: 'admin logged in successfully'});
        }
    })
});


// router.get("/api/getUser",function(req,res){  
//     SoilSchema.findById("6094f3f09920fd53e07cd1e9",function(err,data){  
//               if(err){  
//                   res.send(err);  
//               }  
//               else{                
//                   res.send(data);  
//                   }  
//           });  
//   })



module.exports=router;