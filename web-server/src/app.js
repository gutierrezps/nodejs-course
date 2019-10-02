const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Create an Express application
const app = express()

const publicDirPath = path.join(__dirname, '..', 'public')
const viewsPath = path.join(__dirname, '..', 'templates', 'views')
const partialsPath = path.join(__dirname, '..', 'templates', 'partials')

app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set public path folder to be served by Express
app.use(express.static(publicDirPath))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        appTitle: 'Weather App',
        pageTitle: 'Homepage',
        author: 'Gutierrez PS'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        appTitle: 'Weather App',
        pageTitle: 'About',
        author: 'Gutierrez PS'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        appTitle: 'Weather App',
        pageTitle: 'Help',
        author: 'Gutierrez PS',
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        appTitle: 'Weather App',
        pageTitle: 'Not found',
        author: 'Gutierrez PS',
        missing: 'Help article'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        appTitle: 'Weather App',
        pageTitle: 'Not found',
        author: 'Gutierrez PS',
        missing: 'Page'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
