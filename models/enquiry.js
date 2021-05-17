// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');
const router = require('../routes/route');

const Enquiry = mongoose.Schema({


    Title: {
        type: String,
        
        
      },

    Question: {
        type: String,
        
    },
    Answer: {
        type: String,
        
    },

})



const  enquiry = mongoose.model('Enquiry', Enquiry);
module.exports = { enquiry };

