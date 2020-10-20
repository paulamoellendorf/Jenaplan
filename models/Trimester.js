const mongoose=require('mongoose');
const { Schema, model }= mongoose;

const trimesterSchema=new Schema({
  Trimesterstart:Date,
  Trimesterende:Date,
  Name:String,
  Schuljahr:String
})



const Trimester=model('Trimester',
trimesterSchema);
module.exports=Trimester;