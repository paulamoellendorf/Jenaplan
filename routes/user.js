const express = require('express');
const router = express.Router();
const User= require('../models/User');

router.get('/', (req, res) => {

  User.find()
  // .populate('Student')
    .then(User=> {
      res.status(200).json(User);
    })
    .catch(err => {
      res.json(err);
    });
});
router.get('/:id', (req, res)=>{
  User.findById(req.params.id)
 
  .then(user=>{
    if(!user){
      res.status(400).json(user);
    }else{
      res.json(user)
    }
  })
  .catch(err=>{
    res.json(err);
  })
})

// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   const password= req.body.password;
//   const hashedPassword=

//   User.findByIdAndUpdate(id, {
//   }, { new: true })
//     .then(student => {
//       res.json(student);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    // .then(bewertung => {
    //   return Project.findByIdAndUpdate(task.project, {
    //     $pull: { tasks: id }
    //   }).then(() => {
    //     res.json({ message: 'ok' });
    //   });
    // })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;