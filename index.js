const express = require('express')
const app = express(express)
const path = require('path')

// settings
app.set('port', 5000)

// middlewares
app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname)

// routes
app.get('/', (req, res)=>{
    res.send('Bienvenidos')
})

app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})