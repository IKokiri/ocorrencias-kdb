import User from '../../../entity/User';
import UserRepository from '../../../infrastructure/repository/user';

const getUsers = async (): Promise<User[]> => {
  const repository = new UserRepository();

  const users = await repository.getAll();

  return users;
};

export default getUsers;
