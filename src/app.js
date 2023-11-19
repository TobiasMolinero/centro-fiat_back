import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//IMPORTAMOS RUTAS
import indexRoute from './routes/index-route.js';
import productos from './routes/productos.js';
import ingresos from './routes/ingresos.js';
import salidas from './routes/salidas.js';
import usuarios from './routes/usuarios.js';

//MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(cors());

//USAMOS LAS RUTAS
app.use('/', indexRoute);
app.use('/', productos);
app.use('/', ingresos);
app.use('/', salidas);
app.use('/', usuarios);

//EXPORTAMOS APP
export default app;
