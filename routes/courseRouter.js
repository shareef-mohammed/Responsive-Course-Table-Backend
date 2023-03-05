const express = require('express');
const { addCourse, getCourses } = require('../controllers/courseController');
const router = express.Router()

router.post('/addCourse', addCourse)
router.get('/getCourses', getCourses)

module.exports = router;