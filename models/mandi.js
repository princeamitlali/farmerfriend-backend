// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const  mandiSchema = mongoose.Schema({


    STATE: {
        type: String,
        required: true,
        unique: true,
      },

    DIST: {
        type: String,
        required: true
    },
    MARKET: {
        type: String,
        required: true
    },
    GODOWN: {
        type: String,
        required: true
    },
    COLDSTORAGE: {
        type: String,
        required: true
    },
    DISTANCE: {
        type: String,
        required: true
    },
    CROPS: {
        type: String,
        required: true
    },
    PHONE: {
        type: String,
        required: true
    },
    COLDSTORAGE: {
        type: String,
        required: true
    },
    ADDRESS: {
        type: String,
        required: true
    }
    
})

const  mandischema = mongoose.model('mandis',mandiSchema );
module.exports = { mandischema };

