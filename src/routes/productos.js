import { Router } from 'express';
import { all,
         one,
         create,
         edit,
         del,
         cargarSelect
} from '../controllers/productos.js';

const router = Router()

router.get('/productos', all);
router.get('/productos/select/:id', one)
router.get('/productos/cargarselect', cargarSelect)
router.post('/productos/create', create);
router.put('/productos/edit/:id', edit);
router.put('/productos/delete/:id', del);

export default router;