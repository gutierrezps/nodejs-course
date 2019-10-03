const request = require('request')

const geocode = (address, callback) => {
    const addressEncoded = encodeURIComponent(address)
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
            + addressEncoded + '&key=' + process.env.GOOGLE_API_KEY
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.results.length === 0) {
            callback('Unable to find geocoding location', undefined)
        } else {
            const location = body.results[0].formatted_address
            const {lat: latitude, lng: longitude} = body.results[0].geometry.location
    
            callback(undefined, {location, latitude,longitude})
        }
    })
}

module.exports = geocode
