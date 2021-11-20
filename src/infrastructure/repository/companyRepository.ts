import { getRepository, Repository } from 'typeorm';
import Company from '../../domain/company/entity/Company';
import CompanySchema from '../../entity/Company';

class CompanyRepository {
  private repository: Repository<CompanySchema>;

  constructor() {
    this.repository = getRepository(CompanySchema);
  }

  async createCompany(company: Company): Promise<boolean> {
    const companySchema = new CompanySchema();
    companySchema.id = company.id;
    companySchema.name = company.name;

    const retCompany = await this.repository.save(companySchema);

    return !!retCompany;
  }

  async getCompany(name: string): Promise<CompanySchema | undefined> {
    const companySchema = new CompanySchema();

    companySchema.name = name;
    const retCompany = await this.repository.findOne(companySchema);
    return retCompany;
  }
}

export default CompanyRepository;
