import { Router } from 'express';
import { all, create, del } from '../controllers/ingresos.js';

const router = Router();

router.get('/ingresos', all);
router.post('/ingresos', create);
router.post('/ingresos/delete/:id', del);

export default router;
