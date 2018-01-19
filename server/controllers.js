module.exports = {
    getCards: (req, res) => {
        const db = req.app.get('db')
        const params = req

        db.get_cards([params.id])
            .then((body) => {
                console.log(res)
                res.status(200).send(body)
            })
            .catch((error) => {
                console.log(error)
                res.status(500).send(error)
            })
    },
    postCards: (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.body)
        db.post_cards([
            req.body.card_name
            , req.body.card_desc
            , req.body.card_type
            , req.body.item_type
            , req.body.card_level
            , req.body.bad_stuff
            , req.body.how_many
            , req.body.picture_url
        ]).then(() => {
            res.status(200)
        })
    }
}