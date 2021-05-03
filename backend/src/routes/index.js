const students = require('./Students');

const init = (expressInstance, basePath) => {
    students.init(expressInstance, basePath)
}

module.exports = {
    init
}