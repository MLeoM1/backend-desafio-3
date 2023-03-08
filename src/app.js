const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 100 },
  { id: 2, nombre: 'Producto 2', precio: 200 },
  { id: 3, nombre: 'Producto 3', precio: 300 },
  { id: 4, nombre: 'Producto 4', precio: 400 },
  { id: 5, nombre: 'Producto 5', precio: 500 },
  { id: 6, nombre: 'Producto 6', precio: 600 },
  { id: 7, nombre: 'Producto 7', precio: 700 },
  { id: 8, nombre: 'Producto 8', precio: 800 },
  { id: 9, nombre: 'Producto 9', precio: 900 },
  { id: 10, nombre: 'Producto 10', precio: 1000 }
];

app.get('/products', (req, res) => {
  const { limit } = req.query;

  if (limit) {
    const limitedProductos = productos.slice(0, limit);
    return res.json(limitedProductos);
  }

  res.json(productos);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return res.status(404).json({ error: 'El producto no existe' });
  }

  res.json(producto);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
