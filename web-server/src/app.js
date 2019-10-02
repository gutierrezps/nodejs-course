const express = require('express')

// Create an Express application
const app = express()

// root route
app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help</h1><p>Weather forecast API</p>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1><p>Made with NodeJs and Express. By Gutierrez PS</p>')
})

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
