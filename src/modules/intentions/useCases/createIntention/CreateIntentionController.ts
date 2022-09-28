
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateIntentionUseCase } from './CreateIntentionUseCase'

class CreateIntentionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { zipcode_start, zipcode_end } = req.body
        const intentionUseCase = container.resolve(CreateIntentionUseCase)
        const { intention_id } = await intentionUseCase.execute({zipcode_start, zipcode_end })
        return res.status(201).json({"intention_id": intention_id})
    }
}
export { CreateIntentionController }