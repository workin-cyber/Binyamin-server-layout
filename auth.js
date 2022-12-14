const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

async function createToken(data) {
    return jwt.sign({ data }, secret, { expiresIn: '2d' })
}

async function validToken(req, res,next) {
    try {
        let data = req.headers.authorization.replace('Bearer ', '')
        let result = jwt.verify(data, secret)
        req.pavel = result.data
        console.log(result);
        next()
    }
    catch (err) {
        res.status(401).send('token incorrect !!!!')
    }
}

module.exports = { createToken, validToken }