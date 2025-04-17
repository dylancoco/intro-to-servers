const express = require('express')
const path = require('path')

const PORT = 3000
const app = express()

const foodTrucks = [
    {
      "id": 1,
      "name": "Taco Town",
      "cuisine": "Mexican",
      "location": "San Francisco",
      "rating": 4.5,
      "is_open": true
    },
    {
      "id": 2,
      "name": "Burger Bros",
      "cuisine": "American",
      "location": "Los Angeles",
      "rating": 4.3,
      "is_open": false
    },
    {
      "id": 3,
      "name": "Curry Express",
      "cuisine": "Indian",
      "location": "San Jose",
      "rating": 4.6,
      "is_open": true
    },
    {
      "id": 4,
      "name": "Wok This Way",
      "cuisine": "Chinese",
      "location": "Oakland",
      "rating": 4.2,
      "is_open": false
    },
    {
      "id": 5,
      "name": "Pizza on Wheels",
      "cuisine": "Italian",
      "location": "San Diego",
      "rating": 4.7,
      "is_open": true
    }
  ]

app.get('/api/foodTrucks', (req, res) =>{
    res.status(200).json(foodTrucks)
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT)