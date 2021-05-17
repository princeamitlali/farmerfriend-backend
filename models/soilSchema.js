// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const soilSchema = mongoose.Schema({

    STATE: {
        type: String,
        
      },
      dist: {
        type: String,
        
      },
      TelePhone: {
        type: String,
       
      },

    Email: {
        type: String,
        
        
      },

    Fax: {
        type: String,
        

    },

    No_of_Staff: {
        type: String,
        

    },

    Office_Address_Line1: {
        type: String,
        

        
        
    },

    Office_Name: {
        type: String,
      

        
    },
    SOil_Equipment: {
        type: String,
      },
      Soil_Test_No: {
        type: String,
      },
      Other_Information:{
            type: String,
          
      }

    

})

const  SoilSchema = mongoose.model('soiltesting', soilSchema);
module.exports = { SoilSchema };

