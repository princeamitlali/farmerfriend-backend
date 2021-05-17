const mongoose=require('mongoose');
const adminSchema=mongoose.Schema({
    phone:{
        type:Number,
        required: true,
        unique:true
        
    },
	pass:{
        type:String,
        required: true,
        
    },
   });
const Admin=module.exports=mongoose.model('admin',adminSchema);