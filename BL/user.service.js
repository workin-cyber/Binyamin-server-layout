const userDL = require('../DL/user.controller')
const auth = require('../auth')

async function createNewUser(data) {
    if (!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({ email: data.email });
    if (user) throw "user is exist"

    let res = await userDL.create(data);
    return res;
}

async function login(data) {
    const user = await getUserByPass(data)

    if (!user || user.password !== data.password) throw { msg: 'Login failed', code: 401 }

    let token = auth.createToken(user._id)
    return token;
}

async function getUserByPass(data) {
    return await userDL.readOne({ email: data.username }, '+password')
}

async function getAllUsers() {
    return await userDL.read({})
}

let user = {
    fName: "moshe",
    lName: "levy",
    email: "moshe_ll@gmail.com",
    password: "63kjdsak93",
    dob: new Date(1980, 8, 6),
    gender: "female",
    permission: "admin"
}

module.exports = { login,getAllUsers }