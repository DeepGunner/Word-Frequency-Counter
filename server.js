const express = require('express')
const request = require('request')
const path = require('path');

const app = express()

const PORT = process.env.PORT || 5000

var wordCount = []

function wordCounter(url, callback) {
    request(url, (err, res, text) => {
        if (err) throw err

        
    
        var wordPool = {}
        wordArray = text.toLowerCase().split(/\W+/)
    
        wordArray.forEach((key) => {
            if (wordPool.hasOwnProperty(key)) {
                wordPool[key] += 1
            } else {
                wordPool[key] = 1
            }
        })
    
        wordCount = Object.keys(wordPool).map((key) => {
            return {
                word: key,
                count: wordPool[key]
            }
        })
    
        wordCount.sort((a,b) => b.count - a.count)

        return callback(wordCount)
        
    })
}

app.use(express.static('client/build'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/data', (req, res) => {
    wordCounter('http://terriblytinytales.com/test.txt', (data) => {
        res.send(data)
    })
})

app.listen(PORT, () => console.log('Server running on Port ' + PORT))
