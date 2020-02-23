// Install Mongoose
const mongoose = require ('mongoose')
// Reset promise
mongoose.Promise=Promise;

let mongoURI = '';
if (process.env.NODE_ENV==='production') {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = 'mongodb://localhost/ps3';
}
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
})
.then( feedback =>
    console.log('connected to the db'))
    .catch( error =>
        console.log('It did not connect, here is why ', error)
        );
module.exports = mongoose;