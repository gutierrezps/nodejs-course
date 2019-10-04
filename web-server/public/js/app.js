console.log('Client side javascript file loaded')

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const location = searchInput.value
    message1.textContent = 'Loading forecast...'
    message2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            const {error, location, forecast} = data
            if (error) {
                console.error(error)
                message1.textContent = error
            } else if (location && forecast) {
                console.log('Location:', location)
                console.log('Forecast:', forecast)
                message1.textContent = location
                message2.textContent = forecast
            } else {
                console.error('Unknown response:', data)
                message1.textContent = 'Unknown response: ' + data
            }
        })
    })
})
