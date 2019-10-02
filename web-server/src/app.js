const path = require('path')
const express = require('express')

// Create an Express application
const app = express()

// Add public path folder to be served by Express
const publicDirPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicDirPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: {
            temperature: 30,
            precipitation: 0.2
        },
        location: 'João Pessoa, Paraíba'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
