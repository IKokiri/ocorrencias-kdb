import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import indexRouter from './infrastructure/controller';
import swaggerDocs from './api-docs/swagger.json';
import 'reflect-metadata';
import connectionDB from './infrastructure/database/connection';
import userRoute from './infrastructure/controller/user';
import companyRoute from './infrastructure/controller/company';

const app = express();

connectionDB();

app.use(express.json());
app.use(cors());

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1', indexRouter);
app.use('/v1/user', userRoute);
app.use('/v1/company', companyRoute);

export default app;
