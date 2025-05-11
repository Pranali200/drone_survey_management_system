const mongoose = require("mongoose");
const droneSchema = new mongoose.Schema({
        name: String,
        status: {type:String, enum: ["available","in-mission","maintenance"], default :"available"},
        battery: Number,
        location:{
            type:{type:String, enum: ["Point"], default:"Point"},
            coordinates: [Number]
        }
});

droneSchema.index({ location:"2dsphere"});
module.export = mongoose.model("Drone", droneSchema)
