import { Router } from 'express';
import { all, del, create} from '../controllers/salidas.js';

const router = Router();

router.get('/salidas', all);
router.post('/salidas', create)
router.post('/salidas/delete/:id', del)

export default router;
