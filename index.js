const express = require('express')
const app = express(express)
const path = require('path')
const PORT = process.env.PORT || 5000;


// settings


// middlewares
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

// routes
app.get('/', function(req, res) {
    res.send ('Bienvenidos')
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});