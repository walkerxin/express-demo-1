import express from 'express';
const app = express()
const port = 4000

app.get('/xxx', (request, response) => {
    response.send('I\'m fine.\n')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
