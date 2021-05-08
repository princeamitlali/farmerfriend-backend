const express=require('express');
const router=express.Router();
const {HelplineSchema}= require('../models/Helplines')
const {schemeSchema} = require('../models/Schemes')
const {SoilSchema}=require('../models/soilSchema')
const {contactus}= require('../models/contactUs')
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
        STATE:req.body.STATE,
        dist:req.body.dist,
        Email:req.body.Email,
        Fax:req.body.Fax1,
        No_of_Staff:req.body.No_of_Staff,
        Office_Address_Line1:req.body.Office_Address_Line1,
        Office_Name:req.body.Office_Name,
        TelePhone:req.body.TelePhone,
        Soil_Equipment:req.body.Soil_Equipment,
        Soil_Test_No:req.body.Soil_Test_No,
        Other_Information:req.body.Other_Information
    });

    newsoilSchema.save((err,SoilSchema)=>{
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


// router.post('/HelplineSchema',(req,res,next)=>{
//     let newregister=new HelplineSchema({
//         details:req.body.details,
//         title: req.body.titles
//     });
//     newregister.save((err,HelplineSchema)=>{
//         if(err)
//         {
//             res.json({msg: 'Failed to register'});
//         }
//         else{
//             res.json({msg: 'user added successfully'});
//         }
//     })
// });

router.post('/HelplineSchema',(req,res,next)=>{
    let newregister=new HelplineSchema({
        details:req.body.details,
        title: req.body.title
    });
    newregister.save((err,HelplineSchema)=>{
        if(err)
        {
            res.json({msg: 'Failed to register'});
        }
        else{
            res.json({msg: 'data added successfully'});
        }
    })
});

// router.post('/HelplineSchema',(req,res,next)=>{
//     let newHelpline=new HelplineSchema({

//         details: req.body.details ,
//         title: req.body.title 
//     });
//     HelplineSchema.save((err,HelplineSchema)=>{
//         if(err)
//         {
//             res.json({msg: 'Failed to login'});
//         }
//         else{
//             res.json({msg: 'admin logged in successfully'});
//         }
//     })
// });

//SchemesSchema Route
router.get('/schemeSchema',(req,res,next)=>{
    schemeSchema.find(function(err,schemeSchema){
        res.json(schemeSchema);
    }); 
});


router.post('/schemeSchema',(req,res,next)=>{
    let newschemeSchema=new schemeSchema({
        Data: req.body.Data ,
        Description: req.body.Description ,
        State: req.body.State ,
        title: req.body.title ,
        Website: req.body.Website ,

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
    let newregister=new mandischema({
        STATE: req.body.STATE ,
        DIST: req.body.DIST ,
        MARKET: req.body.MARKET ,
        GODOWN:req.body.GODOWN ,
        COLDSTORAGE: req.body.COLDSTORAGE,
        DISTANCE: req.body.DISTANCE ,
        CROPS:req.body.CROPS ,
        PHONE: req.body.PHONE,
        ADDRESS:req.body.ADDRESS,

    });
    newregister.save((err,mandischema)=>{
        if(err)
        {
            res.json({msg: 'Failed to register'});
        }
        else{
            res.json({msg: 'user added successfully'});
        }
    })
});



//contct us schema and route

router.get('/contactus',(req,res,next)=>{
    contactus.find(function(err,contactus){
        res.json(contactus);
    }); 
});


router.post('/contactus',(req,res,next)=>{
    let newregister=new contactus({
        Fullname: req.body.Fullname ,
        Topic: req.body.Topic ,
        Details: req.body.Details ,

    });
    newregister.save((err,contactus)=>{
        if(err)
        {
            res.json({msg: 'Failed to register'});
        }
        else{
            res.json({msg: 'user added successfully'});
        }
    })
});









// router.post('/register',(req,res,next)=>{
//     let newregister=new register({
//         FullName:req.body.FullName,
//         phoneNumber: req.body.phoneNumber
//     });
//     newregister.save((err,register)=>{
//         if(err)
//         {
//             res.json({msg: 'Failed to register'});
//         }
//         else{
//             res.json({msg: 'user added successfully'});
//         }
//     })
// });


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