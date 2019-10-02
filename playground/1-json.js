const fs = require('fs')
// const book = {
//     title: 'Uzumaki',
//     author: 'Junji Ito'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const storedBookJson = fs.readFileSync('1-json.json')
// console.log(storedBookJson)
// const storedBook = JSON.parse(storedBookJson)
// console.log(storedBook.title)

const storedData = fs.readFileSync('1-json.json')
const storedJson = storedData.toString()
myData = JSON.parse(storedJson)

myData.age = 25
myData.name = 'Gabriel'

fs.writeFileSync('1-json.json', JSON.stringify(myData))
