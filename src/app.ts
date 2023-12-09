const express = require('express')
const { request: Req } = require('express')
const { response: Res } = require('express')
const app = express()
const port = 3000

app.get('/', (req: typeof Req, res: typeof Res ) => {
  res.send('Hello World!')
})

console.log(process.cwd()) //cwd - current working directory