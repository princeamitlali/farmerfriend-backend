// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const  mandiSchema = mongoose.Schema({


    STATE: {
        type: String,
        
      },

    DIST: {
        type: String,
    },
    MARKET: {
        type: String,
        
    },
    GODOWN: {
        type: String,
    },
    COLDSTORAGE: {
        type: String,
   },
    DISTANCE: {
        type: String,
    },
    CROPS: {
        type: String,
    },
    PHONE: {
        type: String,
    },
    ADDRESS: {
        type: String,
    }
    
})

const  mandischema = mongoose.model('mandis',mandiSchema );
module.exports = { mandischema };

