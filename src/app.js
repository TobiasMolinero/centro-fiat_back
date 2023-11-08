import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//IMPORTAMOS RUTAS
import indexRoute from './routes/index-route.js';

//MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(cors());

//USAMOS LAS RUTAS
app.use('/', indexRoute);

//EXPORTAMOS APP
export default app;
