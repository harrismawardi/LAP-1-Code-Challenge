const express = require('express')
const cors = require('cors')
const port = 8000;
const app = express();
const data = require('./data');
const controllers = require('./controllers')

//creates the server
app.use(cors())
app.listen(port, () => console.log(`you are successfully connected to http://localhost:${port}`))

app.get('/', (req,res) => {
    res.send('Hello World!')
})

//the route for all results
app.get('/results', (req, res) => {
    res.send(data.results)
})

//the route for cheese
app.get('/results/cheese', (req, res) => { 
    res.send(data.results.cheese)
})

//the route for Love Island
app.get('/results/love-island', (req, res) => {
    res.send(data.results.loveIsland)
})

//the route for Pokemon
app.get('/results/pokemon', (req, res) => { 
    res.send(data.results.pokemon)
})

//the route for Hotels in Spain
app.get('/results/hotels-in-spain', (req, res) => {
    res.send(data.results.hotelsInSpain)
})

//the route for Olympics
app.get('/results/olympics', (req, res) => {
    res.send(data.results.olympics )
})

//the route for random page
app.get('/results/:search/random-page', (req, res) => {
    let search = req.params.search
    res.send(controllers.randomPage(search))
})
