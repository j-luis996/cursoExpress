const express = require('express');
const path = require('path');
const app = express();
const productsRouter = require('./routes/products');

app.use("/static", express.static(path.join(__dirname,"public")));

app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");

app.use('/products',productsRouter);

const server = app.listen(8080, ()=>{
      console.log(`Escuchando en http://localhost:${server.address().port}`);
});