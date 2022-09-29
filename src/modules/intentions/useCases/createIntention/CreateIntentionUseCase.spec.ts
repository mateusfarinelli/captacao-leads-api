import { CreateIntentionUseCase } from "./CreateIntentionUseCase";
import { IntentionRepositoryInMemory } from "../../repositories/in-memory/IntentionRepositoryInMemory";
import { CreateIntentionDTO } from "../../repositories/IntentionRepositoryInterface";
import { AppError } from "../../../../shared/errors/AppError";

  let intentionRepositoryInMemory: IntentionRepositoryInMemory;

  let createIntentionUseCase: CreateIntentionUseCase;

describe("Create Intention", () => {
  beforeEach(() => {
    intentionRepositoryInMemory = new IntentionRepositoryInMemory();
    createIntentionUseCase = new CreateIntentionUseCase(intentionRepositoryInMemory);    
  });

  it("should be able create an intention", async () => {
    const intention: CreateIntentionDTO = {
      zipcode_start: "12345678",
      zipcode_end: "87654321"
    };

    const createdIntention = await createIntentionUseCase.execute({ zipcode_start: intention.zipcode_start, zipcode_end: intention.zipcode_end });    

    expect(createdIntention).toHaveProperty("intention_id");
  })

  it("not should be able create an lead without zipcode_start or zipcode_end paramater", async () => {
    const intentionWithoutZipcodeStart = {
      zipcode_start: null,
      zipcode_end: "87654321"
    };

    const intentionWithoutZipcodeEnd = {
      zipcode_start: "12345678",
      zipcode_end: null
    };

    expect(async () => {
      await createIntentionUseCase.execute({ zipcode_start: intentionWithoutZipcodeStart.zipcode_start, zipcode_end: intentionWithoutZipcodeStart.zipcode_end });
      await createIntentionUseCase.execute({ zipcode_start: intentionWithoutZipcodeEnd.zipcode_start, zipcode_end: intentionWithoutZipcodeEnd.zipcode_end })
    }).rejects.toBeInstanceOf(AppError);
  })
})