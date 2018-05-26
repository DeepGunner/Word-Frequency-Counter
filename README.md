Heroku link: https://ttt-deep.herokuapp.com/

# Installation:

```$ git clone https://github.com/DeepGunner/Word-Frequency-Counter```

```$ npm install```

```$ node server.js```

# Resources used:


https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/template#making-a-progressive-web-app
https://medium.com/byte-sized-react/hosting-react-and-a-rest-api-with-express-28f7ba5a4cc4



# Code Components:



```
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
```



In wordCounter function the text received from the url is stored in text and then split after each white space
and stored in wordArray. Count of words is determined by checking if wordPool.hasOwnProperty.
Then they are stored in wordCount which is an array of objects. This array is sorted and returns as many top results
as requested from the frontend.

```
    componentDidMount() {
        fetch('/data')
            .then(res => res.json())
            .then(data => this.setState({data: data}))
    }
```



Fetch from /data from the React component.






```
app.get('/data', (req, res) => {
    wordCounter('http://terriblytinytales.com/test.txt', (data) => {
        res.send(data)
    })
})
```
GET /data handled at the server end.



```
handleChange(event) {
        this.setState({number: event.target.value})
    }
```



Handling every time there is a change in the input box




        
        
        
        

