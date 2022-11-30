const userDL = require('../DL/user.controller')

async function createNewUser(data) {
    if(!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({email : data.email});
    if(user) throw "user is exist"

    let res = await userDL.create(data);
    return res;
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