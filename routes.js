const express = require('express')
const router = express.Router()

router.get('/people', (req, res) => {
    const data = [
        {
            name: 'zak',
            age: 12
        },
        {
            name: 'wax',
            age: 13
        }
    ]
    return res.status(201).json(data)
})

router.get('/people/:id', (req, res) => {
    const id = req.params.id
    return res.status(200).json({id})
})


module.exports = router