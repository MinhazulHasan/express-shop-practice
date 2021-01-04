const mongoose = require('mongoose');

const dbUri = process.env.MONGO_URI;
// const dbUri = 'mongodb+srv://assignmentEleven:mhSPof2Rf8jqeWhQ@cluster0.rdyuw.mongodb.net/test?retryWrites=true&w=majority';
console.log(dbUri);

if(!dbUri) {
    console.error('Mongo url not set in env file');
    return new Error('Mongo url not set in env file');
}

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if(err) {
        console.error(`failed to connect using mongoose ${err}`);
    } else {
        console.log(`connected to db server`);
    }
});

module.exports = mongoose;