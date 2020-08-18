const express = require('express');
const Bewertung= require('../models/Bewertung');
const Student = require('../models/Student');
const router = express.Router();

router.get('/', (req, res) => {

  Bewertung.find()
    .then(Bewertung => {
      res.status(200).json(Bewertung);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  console.log('post task');
  const {Sozialkompetenz, Bewertung, Kommentar, Datum, studentId } = req.body;

  Bewertung.create({
    Sozialkompetenz,
    Bewertung,
    Kommentar,
    Datum,
    student: studentId
  })
    .then(Bewertung=> {
      return Student.findByIdAndUpdate(studentId, {
        $push: { Sozialkompetenzziele:Bewertung._id }
      }).then(() => {
        res.status(201).json({
          message: `Task with id was successfully added to project with id ${studentId}`
        });
      });
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