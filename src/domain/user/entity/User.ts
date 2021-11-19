import UserRepository from '../../../infrastructure/repository/userRepository';

class User {
  id!: number;

  email!: string;

  password!: string;

  repo!: UserRepository;

  constructor() {
    this.repo = new UserRepository();
  }

  create = async (): Promise<boolean> => {
    const user = new UserRepository();
    user.createUser(this);
    return true;
  };

  update = (): boolean => {
    return true;
  };

  read = (): Array<User> => {
    const user = new User();
    return [user];
  };

  delete = (): boolean => {
    return true;
  };
}

export default User;
