import { Router } from "express";
import { verifyJwt } from "../middleware/webtoken.js";
import { getProducto, createProducto, updateProducto, deleteProducto } from "../controllers/producto.controller.js";

const router = Router();

router.get('/producto', verifyJwt, getProducto);
router.post('/producto', verifyJwt, createProducto);
router.put('/producto', verifyJwt, updateProducto);
router.delete('/producto/:id', verifyJwt, deleteProducto);

export default router;
