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

    try {
      const lead = await this.leadRepository.create({ name, email });
      return lead;

    } catch (error: any) {
        throw new Error(error);
    }    
  }

}

export { CreateLeadUseCase }