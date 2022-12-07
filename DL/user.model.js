
// להגדיר את מבנה הטבלה והשדות
const mongoose = require('mongoose');

// ליצור סכמה - אכיפת המבנה
const userSchema = new mongoose.Schema({
    fName : {
        type : String
    },
    lName : {
        type : String
    },
    email : {
        type:String,
        unique : true,
        required : true
    },
    password : {
        type:String,
        required:true,
        select : false
    },
    dob :{
        type: Date
    },
    createDate : {
        type:Date,
        default : Date.now
    },
    permission : {
        type: String,
        enum : ["admin", "editor", "viewer"],
        default : "viewer"
    },
    gender : {
        type: String,
        enum : ["male", "female"],
        require: true
    },
    isActive : {
        type : Boolean,
        default: true
    }
})

// ליצור את המודל נתונים (את הטבלה - אוסף)
const userData = mongoose.model('user', userSchema)
// ליצא את המודל הנתונים
module.exports = userData;






