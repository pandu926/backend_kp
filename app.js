require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./src/config/swagger');
const userRoute = require("./src/user/user.route");

// const gameRoute = require("./src/game/game.route");
// const fs = require("fs");
// const https = require("https");
// const path = require("path");
const cors = require("cors");

// ssl 
// const options = {
//     key: fs.readFileSync("./ssl/private.key"),
//     cert: fs.readFileSync('./ssl/certificate.crt'),
// };


app.use(cors());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res, next) => {
    if (!['GET', 'POST', 'PUT', 'DELETE'].includes(req.method)) {
        return res.status(405).send('Method not allowed');
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded());
app.use(userRoute);
// app.use(gameRoute);

app.get('/', (req, res) => {
    return res.send("berhasil");
})

app.listen(port, () => {
    console.log("website listen in port " + port);
})
// https.createServer(options, app).listen(port, function() {
//     console.log("Express server listening on port " + port);
// });