const path = require('path')
const express = require('express')

// Create an Express application
const app = express()

// Add public path folder to be served by Express
const publicDirPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicDirPath))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Gutierrez PS'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        author: 'Gutierrez PS'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather App',
        faqs: [
            {question: 'How to do this?', answer: 'By doing that'},
            {question: 'And how to do that?', answer: 'By doing something else'}
        ]
    })
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
