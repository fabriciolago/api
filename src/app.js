'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

// const put = router.put('/:id1/:id2', (req, res, next) => {
//     const id1 = req.params.id1;
//     const id2 = req.params.id2;
//     res.status(201).send({
//         id: id1,
//         item: req.body
//     });
// });

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);

module.exports = app;