const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



app.use('/', (path.join(__dirname, client/build)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));