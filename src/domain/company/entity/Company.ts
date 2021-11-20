import CompanyRepository from '../../../infrastructure/repository/companyRepository';

class Company {
  id!: string;

  name!: string;

  repo!: CompanyRepository;

  constructor() {
    this.repo = new CompanyRepository();
  }

  create = async (): Promise<boolean> =>
    !(await this.exist()) ? !!(await this.repo.createCompany(this)) : false;

  exist = async (): Promise<boolean> =>
    !!(await this.repo.getCompany(this.name));
}

export default Company;
