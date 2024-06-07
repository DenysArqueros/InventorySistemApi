import { Router } from "express";

import { verifyJwt } from "../middleware/webtoken.js";
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from "../controllers/categoria.controller.js";

const router = Router();

router.get('/categoria', verifyJwt, getCategoria);
router.post('/categoria', verifyJwt, createCategoria);
router.put('/categoria', verifyJwt, updateCategoria);
router.delete('/categoria/:id', verifyJwt, deleteCategoria);

export default router;
