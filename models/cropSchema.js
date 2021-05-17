// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const cropSchema = mongoose.Schema({


    categories: {
        type: Number,
        
        unique: true,
      },

    details: {
        type: String,
        
    },

    name: {
        type: String,
        
    },

    description: {
        type: String,
        
    },


})

const  CropSchema = mongoose.model('cropType', cropSchema);
module.exports = { CropSchema };

