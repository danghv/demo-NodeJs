const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

//get a list of ninjas from the db
router.get('/ninjas', (req, res, next) => {
    // Ninja.find({}).then(function(ninjas){
    //     res.send(ninjas)
    // })

    Ninja.geoNear(
    {
        type: 'Point',
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    {
        maxDistance: 100000,
        spherical: true
    }
    ).then(function(ninjas){
        res.send(ninjas)
    })
})

//add a new ninja to the db

router.post('/ninjas', (req, res, next) => {
    // console.log(req.body)
    const coordinates = []
    coordinates.push(Number(req.body.lat))
    coordinates.push(Number(req.body.long))
    const ninja = {
        name: req.body.name,
        rank: req.body.rank,
        available: true,
        geometry: {
            type: "point",
            coordinates: coordinates
        }
    }
    console.log(ninja)
    // console.log(coordinates)
    Ninja.create(ninja).then(function(ninja){
        res.send(ninja)
    }).catch(next)
    
})

//Delete
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({
        _id: req.params.id
    }).then(function(ninja){
        res.send(ninja)
    })
})
//update 
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
        Ninja.findOne({ _id: req.params.id }).then(function(ninja){
            res.send(ninja)
        })
        
    })
})

module.exports = router