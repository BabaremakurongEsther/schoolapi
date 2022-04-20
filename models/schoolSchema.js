const { status } = require("express/lib/response")
const mongoose=require("mongoose")
const schoolSchema= mongoose.Schema({
    name: {
        type:String,
        required:true

    },
    level:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    numberStudents:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true

    },
    Adress:{
        gps:String,
        box:String
    
    },
    contact:{
        phone:String,
        fax:String,
        email:String

    }

},{
    timestamps:true
}
)

const school=mongoose.model("School", schoolSchema)
module.exports=school;