const express = require("express");
const router = express.Router();

const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/movies', (req, res, next) => {
    Movies.find()
      .then(movies => {
        res.render('movies', { movies });
      })
      .catch(e => {
        next(e);
      });
  }
);

router.get('/movies/add', (req, res, next) => {
  console.log('Hi from the /add route!');
  Movies.find()
    .then(movies => {
      res.render('add', { movies });
    })
    .catch(e => {
      next(e);
    });
});

module.exports = router;
