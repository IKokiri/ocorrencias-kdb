import { Router, Response, Request } from 'express';
import createCompany from '../../domain/company/usecases/createCompany';

const company = Router();

company.post('/', async (req: Request, res: Response) => {
  const dtoCompany = {
    name: req.body.name,
  };

  return (await createCompany(dtoCompany))
    ? res.sendStatus(201)
    : res.sendStatus(409);
});

export default company;
