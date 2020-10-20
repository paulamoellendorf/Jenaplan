const express=require('express');
const router=express.Router();
const Trimester=require('../models/Trimester');

router.get('/', (req, res) => {

  Trimester.find()
    .then(Trimester => {
      res.status(200).json(Trimester);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  const Trimesterstart=req.body.Trimesterstart;
  const Trimesterende=req.body.Trimesterende;
  const Name=req.body.Name;
  const Schuljahr=req.body.Schuljahr
  Trimester.create({
    Trimesterstart,
    Trimesterende,
    Name,
    Schuljahr
  })
    .then(Trimester=> {
      res.status(201).json(Trimester);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports=router;