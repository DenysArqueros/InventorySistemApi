import { Router } from "express";
import { getCategoria , createCategoria , updateCategoria , deleteCategoria } from "../controllers/categoria.controller.js";

const router = Router();

router.get('/categoria', getCategoria);
router.post('/categoria', createCategoria);
router.put('/categoria', updateCategoria);
router.delete('/categoria/:id', deleteCategoria);

export default router;
