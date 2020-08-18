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
  // const Frustrationstoleranz=[];
  // const Selbstreflexion=[];
  // const Verantwortungsbewusstsein=[];
  // const SichMotivieren=[];
  // const Zuverlässigkeit=[];
  // const Engagement=[];
  // const Selbstständigkeit=[];
  // const SelbstbewusstseinAusbauen=[];
  // const WertschätzenderUmgang=[];
  // const VorbildlichSein=[];
  // const MentorSein=[];
  // const Erfahrungsweitergabe=[];
  // const Gruppenerfahrung=[];
  // const Zivilcourage=[];
  // const Kritikfähigkeit=[];
  // const Teamfähigkeit=[];

  Student.create({
    Vorname,
    Nachname,
    Klasse,
    Stammgruppe,
    Sozialkompetenzziele
    // Frustrationstoleranz,
    // Selbstreflexion,
    // Verantwortungsbewusstsein,
    // SichMotivieren,
    // Zuverlässigkeit,
    // Engagement,
    // Selbstständigkeit,
    // SelbstbewusstseinAusbauen,
    // WertschätzenderUmgang,
    // VorbildlichSein,
    // MentorSein,
    // Erfahrungsweitergabe,
    // Gruppenerfahrung,
    // Zivilcourage,
    // Kritikfähigkeit,
    // Teamfähigkeit,
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



module.exports=router;