'use strict'

const user = {
    collection: null,

    add(user) {

        if (user.constructor !== Object) throw TypeError(`${user} is not an object`)

        return this.collection.insertOne(user)
            .then(res => res.insertedId.toString())
    },


    retrieve(email) {



        return this.collection.findOne({ email })
            .then(user => {

                if (!user) return null

                user.id = user._id.toString()

                delete user._id

                return user

            })
    },

    updateUser(email) {


        return this.collection.findOne({ email })
            .then(user => {
                if (!user) return null

                else return db.collection.update({ user })
            })
    },

    removeUser(email) {


        return this.collection.findOne({ email })
            .then(user => {
                if (!user) return null

                else return db.collection.remove({ user })
            })
    }

}

module.exports = user