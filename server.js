const express = require('express');
const path = require('path');
const app = express();
//server static files....
app.use(express.static(`${__dirname}/dist/auth0-angular-sample`));
//send all requests to index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/auth0-angular-sample/index.html`));
});
//default Heroku PORT
app.listen(process.env.PORT || 3000);