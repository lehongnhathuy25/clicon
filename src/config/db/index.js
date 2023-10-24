const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/clicon',{
            useNewUrlParser: false,
            useUnifiedTopology: true

        });
        console.log('Connected to MongoDB');
    }
    catch(e){
        console.log('Connect failed');
    }
}
module.exports = { connect };
