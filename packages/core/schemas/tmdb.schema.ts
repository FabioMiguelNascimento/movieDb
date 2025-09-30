import z from 'zod'

const timeEnum = z.enum(['day', 'week'])

export const getTrandingSchema = z.object({
    time: timeEnum.optional().default('day')
})

export type getTrandingInput = z.infer<typeof getTrandingSchema>