const express = require('express')
const request = require('request')
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3000

//API get request
app.get('/data', (req, res) => {
    wordCounter('http://terriblytinytales.com/test.txt', (data) => {
        res.send(data)
    })
})

//React build on client side
app.use(express.static('client/build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});



app.listen(PORT, () => console.log('Server running on port ' + PORT))
