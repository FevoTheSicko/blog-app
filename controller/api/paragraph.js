const router = require('express').Router();
const { Paragraph } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newparagraph = Paragraph.create({
            title: req.body.title,
            paragraph: req.body.paragraph,
            user_id: req.session.user_id

        })
        res.render('dashboard')
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router