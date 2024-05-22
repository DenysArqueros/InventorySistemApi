import { Router } from "express";
import { getProducto , createProducto , updateProducto , deleteProducto } from "../controllers/producto.controller.js";

const router = Router();

router.get('/producto', getProducto);
router.post('/producto', createProducto);
router.put('/producto', updateProducto);
router.delete('/producto', deleteProducto);

export default router;
