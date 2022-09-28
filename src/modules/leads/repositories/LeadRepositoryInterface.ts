import { Lead } from "../infra/entities/Lead";

interface CreateLeadDTO {
  name: string;
  email: string;
}

interface LeadRepositoryInterface{
  findById: (email: string) => Promise<Lead>;
  findByEmail: (email: string) => Promise<Lead>;
  create: ({ name, email }: CreateLeadDTO) => Promise<Lead>;
}

export { LeadRepositoryInterface, CreateLeadDTO }