import { ConflictError } from "../errors/ConflictError.js";
import { NotFoundError } from "../errors/NotFoundError.js";

let tasks = [ 
    { 
        id: 1, 
        title: "pasear perro", 
        description: "sacar al perro a caminar unas cuadras", 
        completed: true, 
        completedAt: new Date("2025-07-22")
    }, 
    
    { 
        id: 2, 
        title: "lavar auto", 
        description: "lavar auto porque está sucio", 
        completed: true, 
        completedAt: new Date("2025-07-23")
    }, 
    
    { 
        id: 3, 
        title: "cortar pasto", 
        description: "el pasto del patio está demasiado alto. Hay que cortarlo", 
        completed: true, 
        completedAt: null
    }, 
    
    { 
        id: 4, 
        title: "comprar comida",
        description: "es necesario ir al supermercado a comprar alimentos", 
        completed: false, 
        completedAt: null
    }
];

export function getTasks() {
    if(tasks.length === 0) {
        throw new NotFoundError('Error obteniendo tareas: no hay tareas para mostrar');
    }
    
    return tasks;
}

export function getTask(id) {
    const task = tasks.find( t => t.id === Number(id) );
    return task;
}

export function removeTask(id) {
    const task = getTask(id);

    if(!task) {
        throw new NotFoundError('Error eliminando tarea: ID no encontrado');
    }
    
    tasks = tasks.filter( t => t.id !== Number(id) );
}

export function addTask(task) {
    if(!task.id) {
        throw new ConflictError('Error creando tarea: ID no incluido o invalido');
    }
    
    const existId = getTask(task.id);

    if(existId) {
        throw new ConflictError('Error creando tarea: ID repetido');
    }
    
    tasks.push(task);
}

export function editTask(id, task) {
    const oldTask = getTask(id);

    if(!oldTask) {
        throw new NotFoundError('Error modificando tarea: ID no encontrado');
    }
    
    oldTask.title = task.title || oldTask.title;
    oldTask.description = task.description || oldTask.description;
    oldTask.completed = task.completed === false ? task.completed :  ( task.completed || oldTask.completed);
    oldTask.completedAt = task.completedAt === null ? task.completedAt :  ( task.completedAt || oldTask.completedAt);
}