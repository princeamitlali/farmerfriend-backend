// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const helplineSchema = mongoose.Schema({


    details: {
        type: String,
        required: true,
        unique: true,
      },

    title: {
        type: String,
        required: true
    },

})

const  HelplineSchema = mongoose.model('helplines', helplineSchema);
module.exports = { HelplineSchema };

