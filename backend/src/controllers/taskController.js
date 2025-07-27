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
        res.json({ mensaje: 'Task eliminado correctamente' });
    } catch (error) {
        next(error);
    }
}

export function createTask(req, res, next) {
    try {
        const newTask = req.body;
        save(newTask);
        res.json({ mensaje: 'Task agregado correctamente' });
    } catch (error) {
        next(error);
    }
}

export function editTask(req, res, next) {
    try {
        const { id } = req.params;
        const newTask = req.body;
        edit(id, newTask);
        res.json({ mensaje: 'Task modificado correctamente' });
    } catch (error) {
        next(error);
    }
}