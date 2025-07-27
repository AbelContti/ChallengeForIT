import express from 'express';
import { getTasks, deleteTask, createTask, editTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.delete('/:id', deleteTask);
router.put('/:id', editTask);
router.post('/', createTask);

export default router;