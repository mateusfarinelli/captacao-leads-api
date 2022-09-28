import { CreateLeadDTO, LeadRepositoryInterface } from "@modules/leads/repositories/LeadRepositoryInterface";
import dataSource from "infra/database";
import { Repository } from "typeorm";
import { Lead } from "../entities/Lead";

class LeadRepository implements LeadRepositoryInterface {
  private repository: Repository<Lead>;

  constructor(){
    this.repository = dataSource .getRepository(Lead)
  }
  
  async findById (lead_id: string): Promise<Lead>{
    const lead = await this.repository.findOneBy({ lead_id });

    return lead!;
  }

  async create ({ name, email }: CreateLeadDTO) : Promise<Lead>{
    const user = await this.repository.create({name, email});

    await this.repository.save(user);

    return user;
  }
}

export { LeadRepository }