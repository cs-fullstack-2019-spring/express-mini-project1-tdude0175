var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SuperHeroSchema = new Schema
(
    {
        id: Number,
        name: String,
        powers: {
            intelligence: Number,
            strength: Number,
            speed: Number,
            combat: Number,
            wealth: Number,
        },
        image: String
    }
);

module.exports = mongoose.model("SuperHeros" , SuperHeroSchema);