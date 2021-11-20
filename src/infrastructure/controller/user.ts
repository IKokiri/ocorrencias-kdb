import { Router, Response, Request } from 'express';
import createUser from '../../domain/user/usecases/createUser';

const user = Router();

user.post('/', async (req: Request, res: Response) => {
  const dtoUser = {
    email: req.body.email,
    password: req.body.password,
  };

  return (await createUser(dtoUser))
    ? res.sendStatus(201)
    : res.sendStatus(409);
});

export default user;
