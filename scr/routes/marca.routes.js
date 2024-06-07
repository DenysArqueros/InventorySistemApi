import { Router } from "express";
import { verifyJwt } from "../middleware/webtoken.js";
import { getMarca, createMarca, updateMarca, deleteMarca } from "../controllers/marca.controller.js";

const router = Router();

router.get('/marca', verifyJwt, getMarca);
router.post('/marca', verifyJwt, createMarca);
router.put('/marca', verifyJwt, updateMarca);
router.delete('/marca/:id', verifyJwt, deleteMarca);

export default router;