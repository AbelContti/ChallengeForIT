export let tasks = [ 
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

export function getTask(id) {
    return tasks.find( t => t.id === Number(id) );
}

export function removeTask(id) {
    tasks = tasks.filter( t => t.id !== Number(id) );
}

export function addTask(task) {
    tasks.push(task);
}

export function editTask(oldTask, newTask) {
    oldTask.title = newTask.title || oldTask.title;
    oldTask.description = newTask.description || oldTask.description;
    
    oldTask.completed = newTask.completed === false ? newTask.completed :  ( newTask.completed || oldTask.completed);
    oldTask.completedAt = newTask.completedAt === null ? newTask.completedAt :  ( newTask.completedAt || oldTask.completedAt);
}