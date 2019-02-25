'use strict'

require('dotenv').config()

const { MongoClient, ObjectId } = require('mongodb')
const users = require('.')
const { expect } = require('chai')

const { env: { DB_URL } } = process

describe('user', () => {
    let client

    before(() =>
        MongoClient.connect(DB_URL, { useNewUrlParser: true })
            .then(_client => {
                client = _client
                users.collection = client.db().collection('users')
            })
    )

    beforeEach(() => users.collection.deleteMany())

    describe('add', () => {
        const _user = {
            username: "user2",
            surname: "user2",
            email: "user2@user2.com",
            password: "123"
        }

        it('should succeed on correct data', () =>
            users.add(_user)
                .then(id => {
                    expect(id).to.exist
                    expect(id).to.be.a('string')

                    return users.collection.findOne({ _id: ObjectId(id) })
                })
                .then(({ name, surname, email, password }) => {
                    expect(name).to.equal(_user.name)
                    expect(surname).to.equal(_user.surname)
                    expect(email).to.equal(_user.email)
                    expect(password).to.equal(_user.password)
                })
        )
    })

    describe('retrieve', () => {
        const _user = {
            username: "user2",
            surname: "user2",
            email: "user2@user2.com",
            password: "123"
        }

        beforeEach(() => users.add(_user))

        it('should succeed on correct data', () =>
            users.retrieve(_user.email)
                .then(({ email }) => {

                    expect(email).to.equal(_user.email)

                })
        )

        it('should null on non matching email', () =>
            users.retrieve('is@nulll.com')
                .then(user => expect(user).to.be.null)
        )


    })

    // describe('remove', () => {
    //     const _user = {
    //         username: "user2",
    //         surname: "user2",
    //         email: "user2@user2.com",
    //         password: "123"
    //     }

    //     beforeEach(() => users.add(_user))

    //     it('should succeed on correct data', () =>
    //         users.removeUser(_user.email)
    //             .then(({ email }) => {

    //                 expect(email).to.equal(_user.email)

    //             })
    //     )

    // it('should null on non matching email', () =>
    //     users.retrieve('is@nulll.com')
    //         .then(user => expect(user).to.be.null)
    // )


    // })


    after(() =>
        users.collection.deleteMany()
            .then(() => client.close())
    )
})