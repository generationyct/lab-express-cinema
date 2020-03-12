const express = require("express");
const router = express.Router();

const Movies = require('../models/Movie');

router.get('/movies', (req, res, next) => {
    res.render('movies')  
  // console.log("movies home page hit");
    // next();
  }),


//   (req, res, next) => {
//     Movies.find()
//       .then(movies => {
//         res.render('movies');
//       })
//       .catch(e => {
//         next(e);
//       });
//   }
// );


module.exports = router