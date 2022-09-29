import "reflect-metadata"
import { injectable, inject } from 'tsyringe';
import { IntentionRepositoryInterface } from '../../repositories/IntentionRepositoryInterface';
import { Intention } from "../../infra/entities/Intention";
import { AppError } from './../../../../shared/errors/AppError';

interface RequestInterface {
  zipcode_start: string;
  zipcode_end: string;
}

@injectable()
class CreateIntentionUseCase {
  constructor(
    @inject("IntentionsRepository")
    private itentionRepository: IntentionRepositoryInterface
  ){}

  async execute({ zipcode_start, zipcode_end }: RequestInterface): Promise<Intention> {
    if (!zipcode_start || !zipcode_end){
      throw new AppError("Não foi possível criar a intention, falta parâmetros na sua requisição", 500)
    }

    const intention = await this.itentionRepository.create({zipcode_start, zipcode_end});
    
    return intention;     
    
  }

}

export { CreateIntentionUseCase }