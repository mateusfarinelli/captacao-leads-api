
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateIntentionUseCase } from './UpdateIntentionUseCase'

class UpdateIntentionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { intention_id } = req.params
        const { lead_id } = req.body
        const intentionUseCase = container.resolve(UpdateIntentionUseCase)
        await intentionUseCase.execute({ intention_id, lead_id })
        return res.status(200).json("OK")
    }
}
export { UpdateIntentionController }