import { LeadRepositoryInMemory } from "../../repositories/in-memory/LeadRepositoryInMemory"
import { CreateLeadUseCase } from "./CreateLeadUseCase";
import { CreateLeadDTO } from '../../repositories/LeadRepositoryInterface';
import { MailProviderInMemory } from '../../../../shared/providers/MailProvider/in-memory/MailProviderInMemory';
import { AppError } from "../../../../shared/errors/AppError";

  let leadRepositoryInMemory: LeadRepositoryInMemory;

  let createLeadUseCase: CreateLeadUseCase;
  let mailProviderInMemory: MailProviderInMemory

describe("Create a Lead", () => {
  beforeEach(() => {
    leadRepositoryInMemory = new LeadRepositoryInMemory();
    mailProviderInMemory = new MailProviderInMemory()
    createLeadUseCase = new CreateLeadUseCase(leadRepositoryInMemory, mailProviderInMemory);    
  });

  it("should be able create a lead", async () => {
    const lead: CreateLeadDTO = {
      name: "Mateus teste",
      email: "mateus_farinelli@hotmail.com"
    };

    await createLeadUseCase.execute({ name: lead.name, email: lead.email });

    const createdLead = await leadRepositoryInMemory.findByEmail(lead.email);

    expect(createdLead).toHaveProperty("lead_id");
  })

  it("not should be able create a lead without name or email paramater", async () => {
    const leadWithoutName = {
      name: null,
      email: "mateus_farinelli@hotmail.com"
    };

    const leadWithoutEmail = {
      name: "Mateus Teste",
      email: null
    };

    expect(async () => {
      await createLeadUseCase.execute({ name: leadWithoutName.name, email: leadWithoutName.email });
      await createLeadUseCase.execute({ name: leadWithoutEmail.name, email: leadWithoutEmail.email })
    }).rejects.toBeInstanceOf(AppError);
  })
})