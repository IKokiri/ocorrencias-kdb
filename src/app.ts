import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import router from './infrastructure/routes/routes';
import swaggerDocs from './api-docs/swagger.json';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1', router);

export default app;
