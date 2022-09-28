import { injectable, inject } from 'tsyringe';
import { LeadRepositoryInterface } from '@modules/leads/repositories/LeadRepositoryInterface';
import { Lead } from '@modules/leads/infra/entities/Lead';

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
      const lead = await this.leadRepository.create({name, email});
        return lead;

    } catch (error: any) {
        throw new Error(error);
    }    
  }

}

export { CreateLeadUseCase }