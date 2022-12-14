const express = require('express'),
    router = express.Router()
const userService = require('../BL/user.service')
const auth = require('../auth')

router.post('/login', async (req, res) => {
    try {
        let result = await userService.login(req.body)
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.status(err.code ?? 400).send(err.msg)
    }
})
router.post('/valid', async (req, res) => {
    try {
        let result = await auth.validToken(req.headers.authorization)
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.status(err.code ?? 400).send(err.msg)
    }
})
router.get('/valid', async (req, res) => {
    try {
        let result = await auth.validToken(req.headers.authorization)
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.status(err.code ?? 400).send(err.msg)
    }
})

// router.get('/', [ func1(req,res,func2),  func2(req, res, func3) , func3])
router.get('/',auth.validToken, async (req, res) => {
    try {
        console.log("from func2 : ", req.pavel);
        let result = await userService.getAllUsers()
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.status(err.code ?? 400).send(err.msg)
    }
})
router.post('/', (req, res) => {

    users.push(req.body)
    res.sendStatus(201)
})
router.get('/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id)
    if (user) res.send(user)

    res.status(400).send("user is not exist")
})

module.exports = router