import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import taskRouter from './routes/taskRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({mensaje: "Bienvenido a la API"});
});

app.use('/api/tasks', taskRouter);

app.use((req, res, next) => {
    res.status(404).json({mensaje: 'Ruta no encontrada'});
    next();
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
// console.log(tasks);