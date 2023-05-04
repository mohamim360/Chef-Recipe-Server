const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const data = require('./data/data.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/data', (req, res) => {
  res.send(data)
})
app.get('/data/:id', (req, res) => {
 const id =req.params.id;
 const i = data.find(n => n.id == id);
 res.send(i);
})

app.listen(port, ()=>{
  console.log(`${port}`)
})