
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateLeadUseCase } from './CreateLeadUseCase'

class CreateLeadController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email } = req.body
        console.log(email);
        const createLeadUseCase = container.resolve(CreateLeadUseCase)
        const { lead_id } = await createLeadUseCase.execute({ name, email })
        console.log(lead_id);
        return res.status(201).json({"lead_id": lead_id})
    }

}
export { CreateLeadController }