const mongoose = require('mongoose');
const MONGO_URL = 'YOUR MONGO URL'

async function connect() {
    try {
        mongoose.connect(MONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if (err) throw "Error DB : " + err

                console.log(`Connection Success`);
            })
    }
    catch (error) {
        console.log(error);
        throw err
    }

}


module.exports = {connect};