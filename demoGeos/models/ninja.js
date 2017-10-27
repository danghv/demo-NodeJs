const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Create Geo schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})
//Create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,

    },
    avaiable: {
        type: Boolean,
        default: false
    },

    //add in geo location
    geometry: GeoSchema

})

const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja  