var mongoose = require('mongoose');
const { Schema, model }= mongoose;
 
var imageSchema = new mongoose.Schema({
    image:{
        data: Buffer,
        contentType: String
    },
    student: {
    type:Schema.Types.ObjectId,
    ref:'Student',
    }
});
 
const Image=model('Image',
imageSchema);
module.exports=Image;
