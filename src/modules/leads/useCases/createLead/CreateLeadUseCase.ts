import { AppError } from './../../../../shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import { LeadRepositoryInterface } from '../../../leads/repositories/LeadRepositoryInterface';
import { Lead } from '../../../leads/infra/entities/Lead';

interface RequestInterface {
  name: string;
  email: string;
}

@injectable()
class CreateLeadUseCase {
  constructor(
    @inject("LeadsRepository")
    private leadRepository: LeadRepositoryInterface
  ){}

  async execute({ name, email }: RequestInterface): Promise<Lead> {
    let lead = email ? await this.leadRepository.findByEmail(email) : null

    if(!lead){     
      try {
        lead = await this.leadRepository.create({ name, email });
        return lead
      } catch (error) {
        throw new AppError("Não foi possível criar o lead, falta parâmetros na sua requisição", 500)
      }
    } 
  }    

}

export { CreateLeadUseCase }