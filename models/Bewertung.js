const mongoose=require('mongoose');
const { Schema, model }= mongoose;

const bewertungSchema= new Schema({
Sozialkompetenz:String,
Bewertungen:Number,
Kommentar:String,
Datum:String,
Student:{
  type:Schema.Types.ObjectId,
  ref:'Student'
},

Lehrer:{
  type:Schema.Types.ObjectId,
  ref:'User'
},
Trimester:{
  type:Schema.Types.ObjectId,
  ref:'Trimester'
}


});

const Bewertung=model('Bewertung',
bewertungSchema);

module.exports=Bewertung;