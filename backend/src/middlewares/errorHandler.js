import { NotFoundError } from '../errors/NotFoundError.js';
import { ConflictError } from '../errors/ConflictError.js';
 
export function errorHandler(err, req, res, next) {
    console.error(`[ERROR] ${err.name}: ${err.message}`);

    if (err instanceof NotFoundError) {
        return res.status(404).json({ mensaje: err.message });
    }

    if (err instanceof ConflictError) {
        return res.status(409).json({ mensaje: err.message });
    }

    // Error genérico (500)
    res.status(500).json({ mensaje: 'Error interno del servidor' });
}