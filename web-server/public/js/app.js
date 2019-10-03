console.log('Client side javascript file loaded')

fetch('/weather?address=Joao Pessoa').then((response) => {
    response.json().then((data) => {
        const {error, location, forecast} = data
        if (error) {
            console.error(error)
        } else if (location && forecast) {
            console.log('Location:', location)
            console.log('Forecast:', forecast)
        } else {
            console.error('Unknown response:', data)
        }
    })
})
