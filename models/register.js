const mongoose=require('mongoose');
const registerSchema=mongoose.Schema({
    FullName:{
        type:String,
        
        
    },
	pass:{
        type:String,
        
        
    },
    phone:{
        type:Number,
        
        
        
        
    }
},{strict:true});
const register=module.exports=mongoose.model('register',registerSchema);