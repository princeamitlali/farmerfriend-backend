const express=require('express');
const router=express.Router();
const {HelplineSchema}= require('../models/Helplines')
const {schemeSchema} = require('../models/Schemes')
const {SoilSchema}=require('../models/soilSchema')
const {mandischema} = require("../models/mandi")
const {CropSchema} = require("../models/cropSchema")
const register=require('../models/register')
const login = require('../models/login')
const Admin = require('../models/admin')
const {contactus}= require('../models/contactUs')
const {enquiry} = require('../models/enquiry')
const {axios} = require('axios')

const jwt = require('jsonwebtoken')
 

// SoilSchema Route

router.get('/SoilSchema',(req,res,next)=>{
    // SoilSchema.find(function(err,SoilSchema){
    //     res.json(SoilSchema);
    // })
    SoilSchema.find({STATE:"Bihar"},function(err,data){  
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

//crop schema

router.get('/cropSchema',(req,res,next)=>{
  
    CropSchema.find(function(err,data){  
        if(err){  
            res.send(err);  
        }  
        else{                
            res.send(data);
            }  
    }); 
    
});


router.post('/cropSchema',(req,res,next)=>{
    let newsoilSchema=new cropSchema({
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



//auth




function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).json('unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).json('unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).json('unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/',(req,res)=>{
    res.send('from api routes')
})

router.post('/register',(req,res,next)=>{
    //let userdata = req.body;
    let newregister=new register({
        FullName:req.body.FullName,
        phone: req.body.phone,
        pass:req.body.pass
    });
    register.findOne({phone:req.body.phone,},(error,user)=>{
        if(error){
            res.json({msg: 'error'})
        }
        else{
            if(user){
                res.status(401).json({msg:'already exists'})
                //res.status(401).send(user)
            }
            else{
                newregister.save((err,registeredUser)=>{
                    if(err)
                    {
                        console.log(err)
                        res.status(401).json({msg: 'Failed to register'});
                    }
                    else{
                        let payload = {subject:registeredUser._id}
                        let token = jwt.sign(payload,'secretKey')
                       
                        res.status(200).json({token})
                       // res.json({msg: 'user added successfully'});
                    }
                })

            }
        }
    })

    
    
});
router.post('/login',(req,res,next)=>{
    let newlogin=new login({
         phone: req.body.phone,
        pass:req.body.pass
    });
    register.findOne({phone:req.body.phone,},(error,user)=>{
        if(error){
            res.status(401).json({msg: 'error'})
        }
        else{
            if(!user){
                res.status(401).json({msg:'invalid number'})
                //res.status(401).send(user)
            }
            else{
                if(user.pass !==req.body.pass){
                    res.status(401).json({msg:'invalid Password'})
                }
                else{
                    let payload = {subject:user._id}
                        let token = jwt.sign(payload,'secretKey')
                       
                        res.status(200).json({token})
                   // res.json({msg:'loggged in succesfully'})
                }
            }
        }
    })
    
  
    
}
);


//admin



// router.post('/adminregister',(req,res,next)=>{
//     //let userdata = req.body;
//     let newregister=new register({
//         FullName:req.body.FullName,
//         phone: req.body.phone,
//         pass:req.body.pass
//     });
//     register.findOne({phone:req.body.phone,},(error,user)=>{
//         if(error){
//             res.json({msg: 'error'})
//         }
//         else{
//             if(user){
//                 res.json({msg:'already exists'})
//                 //res.status(401).send(user)
//             }
//             else{
//                 newregister.save((err,registeredUser)=>{
//                     if(err)
//                     {
//                         console.log(err)
//                         res.json({msg: 'Failed to register'});
//                     }
//                     else{
//                         let payload = {subject:registeredUser._id}
//                         let token = jwt.sign(payload,'secretKey')
                       
//                         res.status(200).json({token})
//                        // res.json({msg: 'user added successfully'});
//                     }
//                 })

//             }
//         }
//     })

    
    
// });

router.post('/adminlogin',(req,res,next)=>{
    let newadminlogin=new Admin({
         phone: req.body.username,
        pass:req.body.pass
    });
    Admin.findOne({phone:req.body.phone,},(error,user)=>{
        if(error){
            res.json({msg: 'error'})
        }
        else{
            if(!user){
                res.json({msg:'invalid user'})
                //res.status(401).send(user)
            }
            else{
                if(user.pass !==req.body.pass){
                    res.json({msg:'invalid Password'})
                }
                else{
                    let payload = {subject:user._id}
                        let token = jwt.sign(payload,'secretKey')
                       
                        res.status(200).json({token})
                   // res.json({msg:'loggged in succesfully'})
                }
            }
        }
    })
    
  
    
}
);

//otp
const config = require("../models/config");
const { response } = require('express');
const client = require("twilio")(config.accountsId,config.authToken)
router.get('/otp',(req,res)=>{
    client.verify.services(config.serviceId).verifications.create({
        to:`+91${req.query.phone}`,
        channel:"sms"
    }).then((data)=>{
        res.status(200).json(data)
    })
})

router.get('/verify',(req,res)=>{
    client.verify.services(config.serviceId).verificationChecks.create({
        to:`+91${req.query.phone}`,
        code:req.query.code
    }).then((data)=>{
        res.status(200).json(data)
    })
})

//contct us schema and route

router.get('/contactus/:Topic',(req,res,next)=>{
    const query = req.params.Topic
    contactus.find({Topic:query},function(err,contactus){
        res.json(contactus);
    }); 
});
router.delete('/contactus/:_id',(req,res,next)=>{
  if(req.params){
    const _id =req.params._id;
    contactus.deleteOne({_id}).then(respon=>{
        return res.send(respon)
    }).catch(err=>{res.status(401).json("error")}); }
    
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


//enquiry route and schema

router.get('/enquiry',(req,res,next)=>{
    enquiry.find(function(err,enquiry){
        res.json(enquiry);
    }); 
});


router.post('/enquiry',(req,res,next)=>{
    let newregister=new enquiry({
        Title: req.body.Title ,
        Question: req.body.Question ,
        Answer: req.body.Answer,

    });
    newregister.save((err,enquiry)=>{
        if(err)
        {
            res.json({msg: 'Failed to register'});
        }
        else{
            res.json({msg: 'user added successfully'});
        }
    })
});

//market price

const {price} = require('../models/price')
router.get('/market',(req,res,next)=>{
                price.find(function(err,enquiry){
                    res.json(enquiry);
                });

            })



module.exports=router;