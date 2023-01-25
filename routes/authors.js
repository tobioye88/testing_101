const express = require('express')

const authorRouter = express.Router()

const authors = [
    {
        name: 'J.K. Rowling',
        id: 1,
        born: 1965,
    },
    {
        name: 'J.R.R. Tolkien',
        id: 2,
        born: 1892,
    },
    {
        name: 'George R.R. Martin',
        id: 3,
        born: 1948,
    },
]

authorRouter.get('/', (req, res) => {
    res.json(authors)
})


authorRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const author = authors.find(author => author.id == id)

    if (!author) {
        res.status(404).end("author not found")
        return
    }

    res.json(author)
})

authorRouter.post('/', (req, res) => {
    const author = req.body
    authors.push(author)
    res.json(author)
})

authorRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const author = req.body
    const index = authors.findIndex(author => author.id == id)

    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors[index] = author
    res.json(author)
})

authorRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = authors.findIndex(author => author.id == id)
    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors.splice(index, 1)
    res.json(authors)
})


module.exports = authorRouter


