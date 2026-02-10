const express = require('express');
const restaurantModel = require('../models/Restaurant');
const router = express.Router();

router.get('/', async (req, res) => {
    res.redirect('/restaurants');
});

// GET all restaurants
router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await restaurantModel.find();
        res.status(200).send(restaurants);
    }catch(err){
        res.status(500).send({message: "Error fetching restaurants"});
    }
});

// GET restaurant by cuisine
router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try{

        const cuisine = req.params.cuisine;
        const restaurants  =await restaurantModel.find({cuisine: cuisine});
        res.status(200).send(restaurants);
    }catch(err){
        res.status(500).send({message: "Error fetching restaurants by cuisine"});
    }
});

// GET all restaurants by city, name, cuisine, and restaurant_id and sorting by restaurant_id
// router.get('/restaurants', async (req, res) => {
//     try {
        
//     } catch(err) {
//         res.status(500).send({message: "Error fetching restaurants"});
//     }
// });

// GET all restaurants that are Delicatessen and are not in Brooklyn, sorted by name in Asc order
router.get('/restaurants/Delicatessen', async (req, res) => {
    try{

        const restaurants = await restaurantModel
                                    .find({cuisine: "Delicatessen", city: {$ne: "Brooklyn"}})
                                    .sort({name: 'asc'});
        res.status(200).send(restaurants);
    }catch(err){
        res.status(500).send({message: "Error fetching Delicatessen restaurants not in Brooklyn"});
    }
});


module.exports = router;