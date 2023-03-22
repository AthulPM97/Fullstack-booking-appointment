const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
    res.json({'hi':'hi'});
})

app.listen(3000, () => console.log('running on port 3000'));