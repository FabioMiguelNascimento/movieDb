import z from 'zod'

export const envSchema = z.object({
    PORT: z.string().nonoptional(),
})

export const env = envSchema.parse(process.env)