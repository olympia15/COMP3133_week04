const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({

    address: {
        type: {
            building: {type: String, required: true},
            street: {type: String, required: true},
            zipcode: {type: String, required: true}
        },
        required: true
    },

    city: {
        type: String,
        required: true
    },

    cuisine: {
        type: String,
        required: true,
        enum: ["American", "Bakery", "Italian", "Japanese", "Delicatessen", "Hamburger", "Chicken", "Vietnamese"]
    }, 

    name:{
        type: String,
        required: true
    },

    restaurant_id: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);