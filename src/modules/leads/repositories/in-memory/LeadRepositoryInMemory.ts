import { Lead } from '../../infra/entities/Lead';
import { CreateLeadDTO } from '../LeadRepositoryInterface';
import { LeadRepositoryInterface } from '../LeadRepositoryInterface';

class LeadRepositoryInMemory implements LeadRepositoryInterface {

  leads: Lead[] = [];

  async findById(lead_id: string): Promise<Lead> {
    return this.leads.find((lead) => lead.lead_id === lead_id);
  }

  async findByEmail(email: string): Promise<Lead> {
    return this.leads.find((lead) => lead.email === email);
  }

  async create({ name, email, }: CreateLeadDTO): Promise<Lead> {
    const lead = new Lead();

    Object.assign(lead, { email, name });

    this.leads.push(lead);

    return lead;
  }

}

export { LeadRepositoryInMemory }