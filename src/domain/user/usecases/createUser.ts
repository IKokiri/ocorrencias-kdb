import { v4 as uuidv4 } from 'uuid';
import dtoUser from '../dto/dtoUser';
import User from '../entity/User';

const createUser = async (reqUser: dtoUser): Promise<boolean> => {
  const user = new User();
  user.id = uuidv4();
  user.email = reqUser.email;
  user.password = reqUser.password;

  return user.create();
};

export default createUser;
