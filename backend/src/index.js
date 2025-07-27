import express from 'express';
import { tasks } from './data/tasks.js';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({mensaje: "Bienvenido a la API"});
});

app.use((req, res, next) => {
    res.status(404).json({mensaje: 'Ruta no encontrada'});
    next();
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
console.log(tasks);