const courseData = require("../models/courseModel");

module.exports.addCourse = async (req, res) => {
  const { name, icon, startDate, totalLesson, lessonCompleted, duration } =
    req.body;
  try {
    if (
      !name ||      
      !totalLesson ||
      !lessonCompleted ||
      !duration
    ) {
      return res.status(200).json("Fields must be filled.");
    }
    const course = new courseData({
      name,
      startDate,
      totalLesson,
      lessonCompleted,
      duration,
    });
    await course.save()
    res.status(200).json('Course successfully added')
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports.getCourses = async (req, res) => {
    try {
      const courses = await courseData.find();
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
};
