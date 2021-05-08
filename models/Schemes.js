// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const  SchemeSchema = mongoose.Schema({


    Date: {
        type: Number,
        required: true,
        unique: true,
      },

    Description: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    }
})

const  schemeSchema = mongoose.model('schemes', SchemeSchema);
module.exports = { schemeSchema };

