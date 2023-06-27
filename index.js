const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.json({'sound': '멍멍'})
})

app.get('/car', (req, res) => {
  res.json({'sound': '야옹'})
})

app.get('/user/:id', (req, res) => {
  const q = req.params;
  console.log(q)
  const p = req.query;
  console.log(p)

  res.json({'userid': q.id})
})

app.get('/sound/:name', (req, res) => {
  const {name} = req.params;
  if(name === 'dog'){
    res.json({'sound': '멍멍'})
  } else if(name==='cat'){
    res.json({'sound': '야옹'})
  } else if(name==='pig'){
    res.json({'sound': '꿀꿀'})
  } else {
    res.json({'sound': '알 수 없음'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})