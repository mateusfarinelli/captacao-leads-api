import { Intention } from "../infra/entities/Intention";

interface CreateIntentionDTO {
  zipcode_start: string;
  zipcode_end: string;
}

interface IntentionRepositoryInterface{
  findById: (intention_id: string) => Promise<Intention>;
  create: ({ zipcode_start, zipcode_end }: CreateIntentionDTO) => Promise<Intention>;
  update: (intention_id: string, lead_id: string) => Promise<Intention>;
}

export { IntentionRepositoryInterface, CreateIntentionDTO }