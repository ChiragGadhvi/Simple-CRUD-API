const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello World from Server');
});

mongoose.connect("mongodb+srv://chiraggadhvi7272:w6F6fIAa29FTclTZ@backenddb.ullqb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    })
    .catch(() => {
        console.log('Failed to connect to MongoDB');
    })