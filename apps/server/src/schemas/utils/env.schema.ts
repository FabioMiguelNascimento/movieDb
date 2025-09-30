import z from 'zod'

export const envSchema = z.object({
    PORT: z.string().nonoptional(),
    TMDB_API_KEY: z.string().nonoptional(),
    TMDB_ACCESS_TOKEN_AUTH: z.string().nonoptional(),
})

export const env = envSchema.parse(process.env)