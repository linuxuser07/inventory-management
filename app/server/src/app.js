//starting the app with the required libraries

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/inventory', (req, res) => {
    res.send(
        [{
            title: "this is a test",
            description: "the body of information"
        }]
    )
})

app.listen(process.env.PORT || 8081)
