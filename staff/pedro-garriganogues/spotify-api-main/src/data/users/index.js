'use strict'

const user = {
    collection: null,

    add(user) {
        // TODO validate user and its fields (type and content)

        return this.collection.insertOne(user)
            .then(res => res.insertedId.toString())
    },

    retrieve(id) {

        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)

        if (!id.trim().length) throw Error('id is empty')

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const comment = comments.find(comment => comment.id === id)

                if (typeof comment === 'undefined') return null

                comment.date = new Date(comment.date)

                return comment
            })
    },

    // register(name, surname, username, password) {
    //     if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
    //     if (!name.trim().length) throw Error('name is empty')

    //     if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
    //     if (!surname.trim().length) throw Error('surname is empty')

    //     if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
    //     if (!username.trim().length) throw Error('username is empty')

    //     if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
    //     if (!password.trim().length) throw Error('password is empty')

    //     return fetch(`${this.url}/user`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ name, surname, username, password })
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             const { status } = response

    //             if (status === 'OK') return response.data.id

    //             throw Error(response.error)
    //         })
    // }
}

module.exports = user