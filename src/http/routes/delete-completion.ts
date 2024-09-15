import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../features/create-goal-completion'
import { deleteGoalCompletion } from '../../features/delete-goal-completion'

export const deleteCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions',
    {
      schema: {
        body: z.object({
          id: z.string(),
        }),
      },
    },
    async request => {
      const { id } = request.body

      await deleteGoalCompletion({ id })
    }
  )
}
