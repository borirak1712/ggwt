const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Word')
})

app.get('/getname', (req, res) => {
    res.send('Borirak Dabchimplee')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Borirak Dabchimplee',
        age: 19,
        apocalypse: 'Belive the Impossible is Possible.',
        detail: 'Bid hert.'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: 'Borirak Dabchimplee',
        age: 19,
        email: 'borirak.dabc@bumail.net',
        address: 'Khong Luang'
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Borirak Dabchimplee',
        project_description: 'woc',
        project_link: 'http://localhost:3000/getprofile',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: 'Khong Luang',
        email: 'borirak.dabc@bumail.net',
        phone_number: 0929932680,
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('start srver at port 3000.')
})