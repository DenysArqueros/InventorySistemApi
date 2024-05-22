import { Router } from "express";
import { getProducto , createProducto , updateProducto , deleteProducto } from "../controllers/producto.controller.js";

const router = Router();

router.get('/marca', getProducto);
router.post('/marca', createProducto);
router.put('/marca', updateProducto);
router.delete('/marca', deleteProducto);

export default router;
