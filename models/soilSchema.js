// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const soilSchema = mongoose.Schema({


    Email1: {
        type: Number,
        required: true,
        unique: true,
      },

    Fax1: {
        type: String,
        required: true
    },

    No_of_Staff: {
        type: String,
        required: true
    },

    Office_Address_Line1: {
        type: String,
        required: true
    },

    Office_Name: {
        type: Number,
        required: true
    }

})

const  SoilSchema = mongoose.model('soiltesting', soilSchema);
module.exports = { SoilSchema };

