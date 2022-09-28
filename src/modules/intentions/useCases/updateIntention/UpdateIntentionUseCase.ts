import { injectable, inject } from 'tsyringe';
import { IntentionRepositoryInterface } from '../../repositories/IntentionRepositoryInterface';
import { Intention } from "../../infra/entities/Intention";

interface RequestInterface {
  intention_id: string;
  lead_id: string;
}

@injectable()
class UpdateIntentionUseCase {
  constructor(
    @inject("IntentionsRepository")
    private itentionRepository: IntentionRepositoryInterface
  ){}

  async execute({ intention_id, lead_id }: RequestInterface): Promise<void> {
    try {
      await this.itentionRepository.update(intention_id, lead_id);

    } catch (error: any) {
        throw new Error(error);
    }    
  }

}

export { UpdateIntentionUseCase }