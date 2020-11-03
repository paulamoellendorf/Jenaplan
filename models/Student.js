const mongoose=require('mongoose');
const { Schema, model }= mongoose;

const studentSchema=new Schema ({
  Vorname:String,
  Nachname:String,
  Klasse:String,
  Stammgruppe:String,
  Sozialkompetenzziele:{
    type:[Schema.Types.ObjectId],
    ref:'Bewertung',
    default:[]
  },
  img:Object,
  // Frustrationstoleranz:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Selbstreflexion:[{
  //   type:[Schema.Types.ObjectId],
  //   ref:'Bewertung' 
  // }],
  // Verantwortungsbewusstsein:{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // },
  // SichMotivieren:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Zuverlässigkeit:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Engagement:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Selbstständigkeit:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // SelbstbewusstseinAusbauen:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // WertschätzenderUmgang:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // VorbildlichSein:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // MentorSein:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Erfahrungsweitergabe:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Gruppenerfahrung:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],

  // Zivilcourage:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Kritikfähigkeit:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],
  // Teamfähigkeit:[{
  //   type:[Schema.Types.ObjectId],
  //       ref:'Bewertung'
  // }],

  
});

const Student=model('Student',
studentSchema);
module.exports=Student;