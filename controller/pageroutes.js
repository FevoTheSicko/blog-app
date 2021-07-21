const User = require('../models/user');

const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { Paragraph } = require('../models');
const session = require('express-session');
//const { eq } = require('sequelize/types/lib/operators');

router.get('/', async (req, res) => {
    try {
        console.log('at loggin route')
        if (req.session.loggedIn) {
            // const userdata = await Paragraph.findAll({
            //     where: {
            //         user_id: req.session.user_id
            //     }
            // })
            //res.status(200).json(userdata)

            res.redirect('/dashboard')
        } else { res.render('login') }
    }

    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/signup', async (req, res) => {
    try { res.render('signup') }

    catch (err) {
        res.status(500).json(err)
    }
})

router.get('/dashboard', async (req, res) => {

    try {
        const userdata = await Paragraph.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        if (userdata) {
            const paragraphData = await Paragraph.findAll({
                where: {
                    user_id: req.session.user_id
                }
            });
            //put code in /ref link
            const paragraphs = paragraphData.map(paragraph => paragraph.get({ plain: true }))

            res.render('dashboard', { paragraphs })
        } else {
            res.redirect('/login')
        }




    }
    catch (err) {
        res.status(500).json(err)
    }

})

router.get('/blog', async (req, res) => {
    try {
        res.render('makeblog')

    } catch (err) {
        res.status(500).json(err)
    }

})


module.exports = router
