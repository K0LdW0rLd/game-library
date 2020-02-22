// Install Mongoose
const mongoose = require ('mongoose')
// Reset promise
mongoose.Promise=Promise;
let mongoUri = '';
if (process.env.NODE_ENV==='production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = 'mongodb://localhost/ps3';
}
mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useMongoClient:true
})
.then( feedback =>
    console.log('connected to the db'))
    .catch( error =>
        consolr.log('It did not connect, here is why ', error)
        );
module.exports = mongoose;