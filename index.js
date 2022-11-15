const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors');

app.use(express.json())
app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')
const carts = require('./data/cart.json')
const members = require('./data/teammember.json')

app.get('/', (req, res) => {
    res.send('Api is Running');
}) 

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '07'){
        res.send(courses);
    }
    else{        
        const category_news = courses.find(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCours = carts.find(p => p.category_id === id);
    res.send(singleCours);
})

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    const singleCart = carts.find(p => p.id === id);
    res.send(singleCart);
})


app.get('/teammembers', (req, res) => {
    res.send(members)
})

app.listen(port, () => {
    console.log('Server is runnig', port)
})