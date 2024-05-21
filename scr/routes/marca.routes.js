import { Router } from "express";
import { getMarca, createMarca, updateMarca, deleteMarca } from "../controllers/marca.controller.js";

const router = Router();

router.get('/marca', getMarca);
router.post('/marca', createMarca);
router.put('/marca', updateMarca);
router.delete('/marca', deleteMarca);


export default router;