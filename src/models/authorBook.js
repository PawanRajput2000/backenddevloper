const  mongoose = require("mongoose")

const authorbook = new mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    author_id:{
        type :Number,
        required:true
    },
    price:Number,
    ratings:mongoose.Schema.Types.Mixed
})




module.exports = mongoose.model("authorbook",authorbook)
