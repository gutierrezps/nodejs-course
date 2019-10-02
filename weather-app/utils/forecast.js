const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/'
            + process.env.DARKSKY_API_KEY + '/'
            + latitude + ',' 
            + longitude + '?units=si'

    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast service', undefined)
        } else if (response.body.error) {
            callback('Unable to find weather location', undefined)
        } else {
            const {temperature, precipProbability} = response.body.currently
            const {summary} = response.body.daily.data[0]

            const data = summary + ' It is currently ' + temperature + ' degrees out. '+
                    'There is a ' + precipProbability * 100 + '% chance of rain.'

            callback(undefined, data)
        }
    })
}

module.exports = forecast
