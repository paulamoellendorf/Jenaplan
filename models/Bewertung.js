const mongoose=require('mongoose');
const { Schema, model }= mongoose;

const bewertungSchema= new Schema({
Sozialkompetenz:{
  type:String,
  enum:['Frustrationstoleranz', 'Selbstreflexion',
'Verantwortungsbewusstsein', 'SichMotivieren', 'Zuverlässigkeit','Engagement',
'Selbstständigkeit', 'SelbstbewusstseinAusbauen','WertschätzenderUmgang', 'VorbildlichSein', 'MentorSein', 'Erfahrungsweitergabe', 'Gruppenerfahrung', 'Zivilcourage', 'Kritikfähigkeit', 'Teamfähigkeit' ]
},
Bewertung:Number,
Kommentar:String,
Datum:Date,
Student:{
  type:Schema.Types.ObjectId,
  ref:'Student'
},

// Lehrer:{
  
// }


});

const Bewertung=model('Bewertung',
bewertungSchema);

module.exports=Bewertung;