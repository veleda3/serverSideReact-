const express = require('express')
const React = require('react')
const RenderToString = require('react-dom/server').renderToString
const Home = require('./client/components/Home').default

const app = express()

app.get('/', (req, res) => {
    const content = RenderToString(<Home />)

    res.send(content)

})

app.listen(3000, () => {
    console.log('listening in port 3000')
})