
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateLeadUseCase } from './CreateLeadUseCase'

class CreateLeadController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email } = req.body
        const createLeadUseCase = container.resolve(CreateLeadUseCase)
        const { lead_id } = await createLeadUseCase.execute({name, email })
        return res.status(201).json(lead_id)
    }

}
export { CreateLeadController }