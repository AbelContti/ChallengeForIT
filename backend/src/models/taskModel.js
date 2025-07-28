import { getTasks, addTask, removeTask, editTask } from "../data/tasks.js";

export function getAllTasks() {
    try {
        return getTasks();
    } catch (error) {
        throw error;
    }
}

export function deleteTask(id) {
    try {
        removeTask(id);
    } catch (error) {
        throw error;
    }
}

export function createTask(task) {
    try {
        addTask(task);
    } catch (error) {
        throw error;
    }
}

export function updateTask(id, task) {
    try {
        editTask(id, task);
    } catch (error) {
        throw error;
    }
}