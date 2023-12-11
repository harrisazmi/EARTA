const express = require('express');
const app = express();
const mongourl = 'mongodb+srv://user1:user1@cluster0.o1lspnq.mongodb.net/?retryWrites=true&w=majority';




app.get('/test', (req, res) => {
    res.json('test ok')
});

app.listen(3333);

//username - user1
//password - user1