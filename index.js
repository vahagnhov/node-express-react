import express from 'express'

const app = express()

app.get('/data', (req,res) => {
    res.send({
        firstName: 'Bob',
        LastName: 'Mills'
    })
})

app.listen(process.env.PORT || 3001)