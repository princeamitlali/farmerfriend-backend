// import { SoilInfoComponent } from './soil-info.component';
const mongoose = require('mongoose');

const prices = mongoose.Schema({})

const  price = mongoose.model('prices', prices);
module.exports = { price };

