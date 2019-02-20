const fs = require("fs");
const util = require("util");
const uuid = require('uuid/v4')


const filePath = __dirname + "/artist-comments.json";
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const artistComment = {

    add(comment) {

        comment.id = uuid()

        return readFile(filePath, 'utf8')

            .then(content => JSON.parse(content))
            .then(content => {
                content.push(comment)
                return content
            })
            .then(content => writeFile(filePath, JSON.stringify(content)))
    },

    retrieve(commentId) {

        return readFile(filePath, 'utf8')
            .then(content => JSON.parse(content))
            .then(content => content.find(comment => comment.id === commentId))

    },

    update(data) {

        return readFile(filePath, 'utf8')
            .then(content => JSON.parse(content))
            .then(content => {
                let comment = content.find(comment => comment.id === data.id)
                Object.assign(comment, data)
                return content
            })
            .then(content => writeFile(filePath, JSON.stringify(content)))

    },
    find(query) {

        return readFile(filePath, 'utf8')
            .then(content => JSON.parse(content))
            .then(content => content.filter(comment => (comment.userId.includes(query.userId) || comment.id.includes(query.id) || comment.id.includes(query.id) || comment.text.includes(query.text) || comment.id.includes(query.id) || comment.date.includes(query.date) || comment.artistId.includes(query.artistId))))

    },


    delete(id) {
        return writeFile(filePath, 'utf8')
            .then(content => JSON.parse(content))
            .then(content => content.findIndex(comment => comment.id === id))
            .then(content => content.slice(comment, 1))
    }
}

// .then(content => {
//     const comments = JSON.parse(content)

//     const index = comments.findIndex(comment => comment.id === id)

//     if (index < 0) throw Error(`comment with id ${id} not found`)

//     comments.splice(index, 1)

//     return fsp.writeFile(file, JSON.stringify(comments, null, 4))
// })


module.exports = artistComment






