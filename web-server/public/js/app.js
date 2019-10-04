console.log('Client side javascript file loaded')

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

weatherForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const location = searchInput.value

    fetch('/weather?address=' + location).then((response) => {
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
})
