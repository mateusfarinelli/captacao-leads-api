import { container } from 'tsyringe';
import { IntentionRepository } from '../../modules/intentions/infra/repositories/IntentionRepository';
import { IntentionRepositoryInterface } from '../../modules/intentions/repositories/IntentionRepositoryInterface';
import { LeadRepositoryInterface } from '../../modules/leads/repositories/LeadRepositoryInterface';
import { LeadRepository } from '../../modules/leads/infra/repositories/LeadRepository';

container.registerSingleton<IntentionRepositoryInterface>(
    "IntentionRepository", IntentionRepository
)

container.registerSingleton<LeadRepositoryInterface>(
    "LeadRepositoryI", LeadRepository
)