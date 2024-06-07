import { Router } from "express";
import { verifyJwt } from "../middleware/webtoken.js";
import { getUnidadMedida, createUnidadMedida, updateUnidadMedida, deleteUnidadMedida } from "../controllers/unidadMedida.controller.js";

const router = Router();

router.get('/unidadMedida', verifyJwt, getUnidadMedida);
router.post('/unidadMedida', verifyJwt, createUnidadMedida);
router.put('/unidadMedida', verifyJwt, updateUnidadMedida);
router.delete('/unidadMedida/:id', verifyJwt, deleteUnidadMedida);


export default router;