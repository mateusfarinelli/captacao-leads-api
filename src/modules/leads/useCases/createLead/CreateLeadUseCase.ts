import { injectable, inject } from 'tsyringe';
import { resolve } from "path";
import { LeadRepositoryInterface } from '../../../leads/repositories/LeadRepositoryInterface';
import { Lead } from '../../../leads/infra/entities/Lead';
import { MailProviderInterface } from './../../../../shared/providers/MailProvider/MailProviderInterface';
import { AppError } from './../../../../shared/errors/AppError';

interface RequestInterface {
  name: string;
  email: string;
}

@injectable()
class CreateLeadUseCase {
  constructor(
    @inject("LeadsRepository")
    private leadRepository: LeadRepositoryInterface,
    @inject("MailProvider")
    private mailProvider: MailProviderInterface, 
  ){}

  async execute({ name, email }: RequestInterface): Promise<Lead> {
    
    if(!name || !email){
      throw new AppError("Não foi possível criar o lead, falta parâmetros na sua requisição", 500)
    }
    
    let lead = await this.leadRepository.findByEmail(email)

    if(!lead){     
      lead = await this.leadRepository.create({ name, email });
        
      const emailTemplatePath = resolve(__dirname, "..","..","..","..","shared","views","email","email.hbs");
        
      const variables = {
        name: lead.name
      }

      await this.mailProvider.sendMail(email, "Obrigado pelo interesse na SmartEnvios", variables, emailTemplatePath)
      
    }
    
    return lead
  }    

}

export { CreateLeadUseCase }