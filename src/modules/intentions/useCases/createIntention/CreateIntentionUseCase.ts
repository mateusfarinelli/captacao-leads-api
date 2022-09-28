import { injectable, inject } from 'tsyringe';
import { IntentionRepositoryInterface } from '../../repositories/IntentionRepositoryInterface';
import { Intention } from "../../infra/entities/Intention";

interface RequestInterface {
  zipcode_start: string;
  zipcode_end: string;
}

@injectable()
class CreateIntentionUseCase {
  constructor(
    @inject("LeadsRepository")
    private itentionRepository: IntentionRepositoryInterface
  ){}

  async execute({ zipcode_start, zipcode_end }: RequestInterface): Promise<Intention> {

    try {
      const intention = await this.itentionRepository.create({zipcode_start, zipcode_end});
        return intention;

    } catch (error: any) {
        throw new Error(error);
    }    
  }

}

export { CreateIntentionUseCase }