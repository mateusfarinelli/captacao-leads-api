import { IntentionRepositoryInMemory } from "../../repositories/in-memory/IntentionRepositoryInMemory";
import { LeadRepositoryInMemory } from '../../../leads/repositories/in-memory/LeadRepositoryInMemory';
import { UpdateIntentionUseCase } from "./UpdateIntentionUseCase";
import { AppError } from "../../../../shared/errors/AppError";

let intentionRepositoryInMemory: IntentionRepositoryInMemory;
let leadRepositoryInMemory: LeadRepositoryInMemory;

let updateIntentionUseCase: UpdateIntentionUseCase;

describe("Update Intention", () => {
  beforeEach(() => {
    intentionRepositoryInMemory = new IntentionRepositoryInMemory();
    leadRepositoryInMemory = new LeadRepositoryInMemory();
    updateIntentionUseCase = new UpdateIntentionUseCase(intentionRepositoryInMemory, leadRepositoryInMemory);
    intentionRepositoryInMemory.intentions.push({
        intention_id: "123casd-13ads-123caz-123",
        zipcode_start: "12345678",
        zipcode_end: "87654321",
        lead_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        lead: null
    });
    leadRepositoryInMemory.leads.push({
      lead_id: "78jkjm98-08a9123nmcza-3418dz1-97346",
      name: "Teste",
      email: "teste@teste.com.br",
      created_at: new Date()
    })
  });

  it("should be able update a lead_id field on intention", async () => {
    const { intention_id } = intentionRepositoryInMemory.intentions[0]
    const { lead_id } = leadRepositoryInMemory.leads[0];
    
    await updateIntentionUseCase.execute({ intention_id: intention_id, lead_id: lead_id});

    const updatedIntention = intentionRepositoryInMemory.findById(intention_id);

    expect(lead_id).toEqual((await updatedIntention).lead_id);
  })

  it("not should be able update an intention without lead_id or intention_id paramaters", async () => {
    const { intention_id } = intentionRepositoryInMemory.intentions[0]
    const { lead_id } = leadRepositoryInMemory.leads[0];

    const requestDataWithOutIntentionId = {
      intention_id: null,
      lead_id: lead_id
    }

    const requestDataWithOutLeadId = {
      intention_id: intention_id,
      lead_id: null
    }

    expect(async () => {
      await updateIntentionUseCase.execute({ intention_id: requestDataWithOutIntentionId.intention_id, lead_id: requestDataWithOutIntentionId.lead_id });
      await updateIntentionUseCase.execute({ intention_id: requestDataWithOutLeadId.intention_id, lead_id: requestDataWithOutLeadId.lead_id })
    }).rejects.toBeInstanceOf(AppError);
  })
})