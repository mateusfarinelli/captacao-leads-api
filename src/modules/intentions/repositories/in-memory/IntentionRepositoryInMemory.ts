import { AppError } from '../../../../shared/errors/AppError';
import { Intention } from "../../infra/entities/Intention";
import { CreateIntentionDTO, IntentionRepositoryInterface } from "../IntentionRepositoryInterface";

class IntentionRepositoryInMemory implements IntentionRepositoryInterface {

  intentions: Intention[] = [];

  async findById (intention_id: string): Promise<Intention> {
    return this.intentions.find((intention) => intention.intention_id === intention_id);
  }

  async create ({ zipcode_start, zipcode_end }: CreateIntentionDTO): Promise<Intention>{
    if(!zipcode_start || !zipcode_end){
      throw new AppError("Não foi possível criar o lead, falta parâmetros na sua requisição", 500);
    }

    const intention = new Intention();

    Object.assign(intention, { zipcode_start, zipcode_end });

    this.intentions.push(intention);

    return intention;

  } 

  async update (intention_id: string, lead_id: string): Promise<Intention>{
    if(!intention_id || !lead_id){
      throw new AppError("Não foi possível alterar a intention, falta parâmetros na sua requisição", 500);   
    }

    const intention = await this.findById(intention_id);

    if(!intention){
      throw new AppError("Não foi possível alterar a intention, intention_id não encontrada no BD", 500);

    }
    
    intention.lead_id = lead_id;
    
    return intention;
  }  

}

export { IntentionRepositoryInMemory }