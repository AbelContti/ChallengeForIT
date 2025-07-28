import { getAllTasks, deleteTask, createTask, updateTask } from "../models/taskModel.js";

export function getAll() {
    return getAllTasks();
}

export function remove(id) {
    return deleteTask(id);
}

export function save(task) {
    return createTask(task);
}

export function edit(id, task) {
    return updateTask(id, task);
}