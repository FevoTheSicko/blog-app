const router = require('express').Router()
const { User } = require('../../models')
const { check, validationResult } = require('express-validator')


//signup
router.post('/',

    check('username').custom(value => {
        return User.findOne({
            where: {
                username: value
            }
        }).then(username => {
            if (username) {

                return Promise.reject('username taken')
            }
        })

    }),
    check('email').custom(value => {
        return User.findOne({
            where: {
                email: value
            }
        }).then(email => {
            if (email) {
                return Promise.reject('email taken')
            } else { console.log('email checked') }
        })
    })
        .isEmail()
        .withMessage('not a valid email address'),
    check('password'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const newuser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            console.log(newuser)

            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user_id = newUser.id;
                req.session.email = newUser.email;
                res.redirect('/').status(200).json(newUser);


            })
            console.log(`Logged in: ${req.session.loggedIn}`);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);

        }
    }



)

router.post('/login', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        console.log('checking')
        const userdata = await User.findOne({
            where: {
                username: req.body.username,
            },
        })
        console.log(userdata);
        if (!userdata) {
            res.status(400).json({ message: 'incorrect username or password' })
            return console.log('useername check failed')
        } console.log(userdata.password)


        if (userdata.password != req.body.password) {
            res.status(400).json({ message: 'incorrect username or password' })
            return console.log('password check failed')
        }

        console.log("session")
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userdata.id;
            req.session.email = userdata.email;
            //console.log({ user: userdata, message: "Logged in!" })
            res.status(200).json(req.session.loggedIn)
        });








    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

router.post('/logout', (req, res) => {
    try {
        console.log('reached logout')
        if (req.session.loggedIn) {
            console.log('logged in')
            req.session.destroy(() => {
                res.status(200).end()
            });
        }
    } catch (err) {
        console.log('error')
        res.status(500).json(err)
    }
});
module.exports = router