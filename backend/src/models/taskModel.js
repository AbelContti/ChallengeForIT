import { tasks, getTask, addTask, removeTask, editTask } from "../data/tasks.js";

export function getAllTasks() {
    try {
        return tasks;
    } catch (error) {
        throw error;
    }
}

// export function getTaskById(id) {
//     try {
//         const task = tasks.find( t => t.id === Number(id) );
//         return task;
//     } catch (error) {
//         throw error;
//     }
// }

export function deleteTask(id) {
    try {
        const task = getTask(id);
        
        if(task) {
            removeTask(id);
        }
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

export function updateTask(id, newTask) {
    try {
        const oldTask = getTask(id);
        if(oldTask) {
            editTask(oldTask, newTask);
        }
    } catch (error) {
        throw error;
    }
}