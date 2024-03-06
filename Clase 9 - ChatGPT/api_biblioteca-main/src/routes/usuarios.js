// usuarios.js

const express = require('express');
const router = express.Router();

// Simulación de base de datos de usuarios
let usuarios = [];

// GET /usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = usuarios.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// POST /usuarios
router.post('/', (req, res) => {
  const newUser = req.body;
  usuarios.push(newUser);
  res.status(201).json(newUser);
});

// PUT /usuarios/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updateUser = req.body;
  const index = usuarios.findIndex(user => user.id === id);
  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...updateUser };
    res.json(usuarios[index]);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// DELETE /usuarios/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = usuarios.findIndex(user => user.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1);
    res.json({ message: 'Usuario eliminado' });
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

module.exports = router;