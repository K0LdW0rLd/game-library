const express = require('express')
const app = express();
const PS3Routes = require('./lib/routes/PS3');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use('/ps3', PS3Routes);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
})
