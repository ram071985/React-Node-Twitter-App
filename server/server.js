const express = require('express')
const app = express()
const port = 3000



app.get('/client/build', (req, res) => res.send('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));