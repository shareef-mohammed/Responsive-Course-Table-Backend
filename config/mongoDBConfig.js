const mongoose = require('mongoose')

const config = async() => {
    mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log('Database connected.')
    })
    .catch((err) => {
        console.log('Database connection failed.')
    })
}

module.exports = config