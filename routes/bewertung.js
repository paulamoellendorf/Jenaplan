const express = require('express');
const router = express.Router();
const Bewertung= require('../models/Bewertung.js');
// const Student = require('../models/Student');


router.get('/', (req, res) => {

  Bewertung.find()
  .populate('Student')
    .then(Bewertung => {
      res.status(200).json(Bewertung);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  console.log(req)
  const Sozialkompetenz=req.body.Sozialkompetenz;
  const Bewertungen=req.body.Bewertung;
  const Kommentar=req.body.Kommentar;
  const Datum=req.body.Datum;
  const Student = req.body.Student;
  Bewertung.create({
    Sozialkompetenz,
    Bewertungen,
    Kommentar,
    Datum,
    Student
  })
    .then(Bewertung=> {
      res.status(201).json(Bewertung);
      // return Student.findByIdAndUpdate(studentId, {
      //   $push: { Sozialkompetenzziele:Bewertung._id }
      // }).then(() => {
      //   res.status(201).json({
      //     message: `Task with id was successfully added to project with id ${studentId}`
      //   });
      // });
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   const { title, description } = req.body;

//   Task.findByIdAndUpdate(id, { title, description }, { new: true })
//     .then(task => {
//       res.json(task);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.delete('/:id', (req, res, next) => {
//   const id = req.params.id;

//   Task.findByIdAndDelete(id)
//     .then(task => {
//       return Project.findByIdAndUpdate(task.project, {
//         $pull: { tasks: id }
//       }).then(() => {
//         res.json({ message: 'ok' });
//       });
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

module.exports = router;