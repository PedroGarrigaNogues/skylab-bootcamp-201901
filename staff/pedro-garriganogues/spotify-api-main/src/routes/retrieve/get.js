const logicFactory = require('../../logic-factory')

module.exports = (req, res) => {
    try {
        const logic = logicFactory.create(req)

        const feedback = pullFeedback(req)

        if (logic.isUserLoggedIn)
            logic.retrieveUser()
                .then(() => res.send('successfully retieved'))
                .catch(({ message }) => {
                    res.status(404).json({
                        error: message
                    })
                })
        else res.redirect('/login')
    } catch ({ message }) {
        res.status(404).json({
            error: message
        })

    }
}