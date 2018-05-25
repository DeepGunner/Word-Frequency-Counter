const express = require('express')
const request = require('request')
const path = require('path');

const app = express()

const PORT = process.env.PORT || 3000

var wordCount = []


//Function to get the word count from the file
function wordCounter(url, callback) {
    request(url, (err, res, text) => {
        if (err) throw err

        var wordPool = {}
        wArray = text.toLowerCase().split(/\W+/)
    
        wArray.forEach((key) => {
            if (wordPool.hasOwnProperty(key)) {
                wordPool[key] += 1
            } else {
                wordPool[key] = 1
            }
        })
    
        wCount = Object.keys(wordPool).map((key) => {
            return {
                word: key,
                count: wordPool[key]
            }
        })
    
        wCount.sort((first,second) => second.count - first.count)

        return callback(wordCount)
    })
}

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
