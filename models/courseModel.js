const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema ({
    name: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      default: Date.now,
    },
    totalLesson: {
      type: Number,
      required: true,
    },
    lessonCompleted: {
      type: Number,
    },
    duration: {
      type: String,
      required: true,
    },
  },

  { timestamps: true })

  module.exports = mongoose.model('Course', courseSchema)