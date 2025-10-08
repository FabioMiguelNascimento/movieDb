import z from 'zod'

export const envSchema = z.object({
    PORT: z.string(),
    THE_MOVIE_DB_API_KEY: z.string(),
    TMDB_ACCESS_TOKEN_AUTH: z.string(),
})

export const env = envSchema.parse(process.env)