const Controller = require('../controllers')

const router = require('express').Router()


router.get("/movies",Controller.fetchMovies)
router.get("/movie/:id",Controller.fetchMovie)


module.exports = router