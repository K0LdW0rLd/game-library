const express = require('express')
const app = express();

app.use(cors());
app.use(BodyParser.json())

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
})
