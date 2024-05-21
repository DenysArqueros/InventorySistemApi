import { Router } from "express";
import { getUnidadMedida, createUnidadMedida, updateUnidadMedida, deleteUnidadMedida } from "../controllers/unidadMedida.controller.js";

const router = Router();

router.get('/marca', getUnidadMedida);
router.post('/marca', createUnidadMedida);
router.put('/marca', updateUnidadMedida);
router.delete('/marca', deleteUnidadMedida);


export default router;