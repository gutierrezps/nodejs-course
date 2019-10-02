const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue('Your notes'))
    notes.forEach((note) => console.log(note.title))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)

        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('A note with the same title already exists'))
    }
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const remainingNotes = notes.filter((note) => note.title !== title)

    if (notes.length === remainingNotes.length) {
        console.log(chalk.bgRed('Note not found!'))
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.bgGreen('Note removed!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    debugger
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('Note not found!'))
    }
}

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
}
