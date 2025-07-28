import { getAll, save, remove, edit } from "../services/taskService.js";

export function getTasks(req, res, next) {
    try {
        const tasks = getAll();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
}

export function deleteTask(req, res, next) {
    try {
        const { id } = req.params;
        remove(id);
        res.json({ mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
        next(error);
    }
}

export function createTask(req, res, next) {
    try {
        if(!req.body) { // Valida que el cuerpo del mensaje no esté vacio
            res.status(404).json({ mensaje: "El cuerpo del mensaje está vacio" });
        }

        const newTask = req.body;
        save(newTask);
        res.json({ mensaje: 'Tarea agregada correctamente' });
    } catch (error) {
        next(error);
    }
}

export function editTask(req, res, next) {
    try {
        if(!req.body) { // Valida que el cuerpo del mensaje no esté vacio
            res.status(404).json({ mensaje: "El cuerpo del mensaje está vacio" });
        }
        
        const { id } = req.params;
        const newTask = req.body;
        edit(id, newTask);
        res.json({ mensaje: 'Tarea modificada correctamente' });
    } catch (error) {
        next(error);
    }
}