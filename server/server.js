const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('../server/modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/reviewFeedback', (req, res) => {
    console.log(req.body);
    let feedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    let values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('error with POST', error);
            res.sendStatus(500);
        })
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});