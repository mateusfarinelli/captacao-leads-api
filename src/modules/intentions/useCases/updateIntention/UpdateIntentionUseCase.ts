import { AppError } from './../../../../shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import { IntentionRepositoryInterface } from '../../repositories/IntentionRepositoryInterface';
import { LeadRepositoryInterface } from '../../../leads/repositories/LeadRepositoryInterface';
import { Intention } from '../../infra/entities/Intention';

interface RequestInterface {
  intention_id: string;
  lead_id: string;
}

@injectable()
class UpdateIntentionUseCase {
  constructor(
    @inject("IntentionsRepository")
    private itentionRepository: IntentionRepositoryInterface,
    @inject("LeadsRepository")
    private leadRepository: LeadRepositoryInterface
  ){}

  async execute({ intention_id, lead_id }: RequestInterface): Promise<Intention> {
    if(!intention_id || !lead_id){
      throw new AppError("Não foi possível alterar a intention, falta parâmetros na sua requisição", 500)    
    }

    const leadExists = await this.leadRepository.findById(lead_id)
    const intentionExists = await this.itentionRepository.findById(intention_id)
    
    if(!intentionExists){
      throw new AppError("Não foi possível alterar a intention, intention_id informada não existe na base de dados", 404)
    }

    if(!leadExists){
      throw new AppError("Não foi possível alterar a intention, lead_id informada não existe na base de dados", 404)
    }

    const intention = await this.itentionRepository.update(intention_id, lead_id);

    return intention;

  }
}



export { UpdateIntentionUseCase }