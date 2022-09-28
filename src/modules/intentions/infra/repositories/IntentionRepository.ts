import { CreateIntentionDTO, IntentionRepositoryInterface } from "../../repositories/IntentionRepositoryInterface";
import dataSource from "infra/database";
import { Repository } from "typeorm";
import { Intention } from "../entities/Intention";

class IntentionRepository implements IntentionRepositoryInterface {

  private repository: Repository<Intention>;

  constructor(){
    this.repository = dataSource.getRepository(Intention) 
  }

  async findById (intention_id: string): Promise<Intention> {
    const intention = await this.repository.findOneBy({ intention_id })

    return intention!;
  }

  async create ({ zipcode_start, zipcode_end }: CreateIntentionDTO): Promise<Intention> {
    const intention = this.repository.create({
      zipcode_start, zipcode_end
    })

    await this.repository.save(intention);

    return intention;
  }

  async update(intention_id: string, lead_id: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ lead_id })
      .where("intention_id = :intention_id")
      .setParameters({ intention_id })
      .execute();
  }
}

export { IntentionRepository }