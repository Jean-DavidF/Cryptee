var mongoose = require('mongoose');

module.exports = mongoose.model('Currency', {
    name : String,
    value : Number
});