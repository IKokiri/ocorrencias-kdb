import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import indexRouter from './infrastructure/controller';
import swaggerDocs from './api-docs/swagger.json';
import 'reflect-metadata';
import connectionDB from './infrastructure/database/connection';
import userRouter from './infrastructure/controller/user';

const app = express();

connectionDB();

app.use(express.json());
app.use(cors());

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1', indexRouter);
app.use('/v1/user', userRouter);

export default app;
