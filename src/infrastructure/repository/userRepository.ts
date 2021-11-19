import { getRepository, Repository } from 'typeorm';
import User from '../../domain/user/entity/User';
import UserSchema from '../../entity/User';

class UserRepository {
  private repository: Repository<UserSchema>;

  constructor() {
    this.repository = getRepository(UserSchema);
  }

  async createUser(user: User): Promise<boolean> {
    const userSchema = new UserSchema();
    userSchema.email = user.email;
    userSchema.password = user.password;

    const retUser = await this.repository.save(userSchema);

    return !!retUser;
  }
}

export default UserRepository;
