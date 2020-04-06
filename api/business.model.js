const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    person_name:{
        type:String
    },
    busines_name : {
        type : String
    },
    NIC_number:{
        type: Number
    }
},{
    collection : 'business'
});
 module.exports = mongoose.model('Business',Business);
