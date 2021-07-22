const express=require('express');
const router=express.Router();
const Student=require('../models/Student');
const { populate } = require('../models/Student');



router.post('/', (req, res)=>{
 


  
  const Vorname=req.body.Vorname;
  const Nachname=req.body.Nachname;
  const Klasse=req.body.Klasse;
  const Stammgruppe=req.body.Stammgruppe;
  const Sozialkompetenzziele=[];

  Student.create({
    Vorname,
    Nachname,
    Klasse,
    Stammgruppe,
    Sozialkompetenzziele,
  
  })
  .then(student=>{
    res.status(201).json(student);
  })
  .catch(err=>{
    res.json(err);
  })
});

router.get('/', (req, res)=>{
  Student.find()
  .populate('Sozialkompetenzziele')

  .then(students=>{
    res.status(200).json(students);
  })
  .catch(err=>{
    res.json(err)
  })
})

router.get('/:id', (req, res)=>{
  Student.findById(req.params.id)
  .populate('Sozialkompetenzziele')
  // .populate('Frustrationstoleranz')
  // .populate('Selbstreflexion')
  // .populate('Verantwortungsbewusstsein')
  // .populate('SichMotivieren')
  // .populate('Zuverlässigkeit')
  // .populate('Engagement')
  // .populate('Selbstständigkeit')
  // .populate('SelbstbewusstseinAusbauen')
  // .populate('WertschätzenderUmgang')
  // .populate('VorbildlichSein')
  // .populate('MentorSein')
  // .populate('Erfahrungsweitergabe')
  // .populate('Gruppenerfahrung')
  // .populate('Zivilcourage')
  // .populate('Kritikfähigkeit')
  // .populate('Teamfähigkeit')
  .then(student=>{
    if(!student){
      res.status(400).json(student);
    }else{
      res.json(student)
    }
  })
  .catch(err=>{
    res.json(err);
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { 
    Vorname,
    Nachname,
    Klasse,
    Stammgruppe,
    Sozialkompetenzziele,
  } = req.body;

  Student.findByIdAndUpdate(id, {  Vorname,
    Nachname,
    Klasse,
    Stammgruppe,
    Sozialkompetenzziele,
  }, { new: true })
    .then(student => {
      res.json(student);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports=router;