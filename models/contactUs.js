// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const contactUS = mongoose.Schema({


    Fullname: {
        type: String,
        required:true
        
      },

    Topic: {
        type: String,
        required: true
    },
    Details: {
        type: String,
        required: true
    },

})

const  contactus = mongoose.model('ContactUs', contactUS);
module.exports = { contactus };

