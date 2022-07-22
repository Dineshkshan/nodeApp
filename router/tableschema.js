const mongo = require('mongoose')


const table=mongo.Schema({
    id:{
        type:Number,
        required:true,
        auto_increment:true,
        unique: true
    },
    MovieName:{
        type:String,
        required:true,
    },
    Rating:{
        type:Number,
        required:true
    },
    Cast:{
        type:Array,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    ReleaseDate:{
        type:Date,
        required:true
    }
});

module.exports=mongo.model('MovieTable',table)