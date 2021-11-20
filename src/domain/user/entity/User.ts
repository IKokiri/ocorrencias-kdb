import UserRepository from '../../../infrastructure/repository/userRepository';

class User {
  id!: string;

  email!: string;

  password!: string;

  repo!: UserRepository;

  constructor() {
    this.repo = new UserRepository();
  }

  create = async (): Promise<boolean> =>
    !(await this.exist()) ? !!(await this.repo.createUser(this)) : false;

  exist = async (): Promise<boolean> => !!(await this.repo.getUser(this.email));
}

export default User;
