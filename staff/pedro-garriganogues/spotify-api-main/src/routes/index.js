module.exports = {
    registerUser: require('./register-user'),

    authenticateUser: require('./authenticate-user'),

    retrieveUser: require('./retrieve-user'),

    searchArtists: require('./search-artists'),

    // TODO other route handlers

    notFound: require('./not-found')

    // router.get('/artist/:id', retrieveArtist)

    // router.get('/album/:id', retrieveAlbum)

    // router.get('/track/:id', retrieveTrack)

    // app.get('*', notFound)
}