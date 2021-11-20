import { v4 as uuidv4 } from 'uuid';
import dtoCompany from '../dto/dtoCompany';
import Company from '../entity/Company';

const createCompany = async (reqCompany: dtoCompany): Promise<boolean> => {
  const company = new Company();
  company.id = uuidv4();
  company.name = reqCompany.name;

  return company.create();
};

export default createCompany;
