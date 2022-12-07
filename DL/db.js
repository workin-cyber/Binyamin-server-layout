const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.3ufjyfg.mongodb.net/server?retryWrites=true&w=majority'

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