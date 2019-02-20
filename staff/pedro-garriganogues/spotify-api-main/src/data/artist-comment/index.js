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


            .then(content => content.filter(comment => (comment.artistId.includes(query[key]) || comment.id.includes(query[key]))))

    }
}



module.exports = artistComment






