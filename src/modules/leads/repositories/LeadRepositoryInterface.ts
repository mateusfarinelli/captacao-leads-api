import { Lead } from "../infra/entities/Lead";

interface CreateLeadDTO {
  name: string;
  email: string;
}

interface LeadRepositoryInterface{
  findById: (Lead_id: string) => Promise<Lead>;
  create: ({ name, email }: CreateLeadDTO) => Promise<Lead>;
}

export { LeadRepositoryInterface, CreateLeadDTO }