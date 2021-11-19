import dtoUser from '../dto/dtoUser';
import User from '../entity/User';

const createUser = async (reqUser: dtoUser): Promise<boolean> => {
  const user = new User();
  user.email = reqUser.email;
  user.password = reqUser.password;

  const statusCreate = await user.create();

  return statusCreate;
};

export default createUser;
