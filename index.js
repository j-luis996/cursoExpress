const express = require('express');
const app = express();

app.get('/',(req, res, next)=> {
      res.send({"hello": "world"});
})

const server = app.listen(8080, ()=>{
      console.log(`Escuchando en http://localhost:${server.address().port}`);
});