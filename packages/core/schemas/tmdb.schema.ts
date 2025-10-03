import z from 'zod'

const page = z.coerce.number().int().min(1).optional().default(1)

const timeEnum = z.enum(['day', 'week']).optional().default('day')

const sortByEnum = z.enum([
    'popularity.asc',
    'popularity.desc',
    'release_date.asc',
    'release_date.desc',
    'vote_average.asc',
    'vote_average.desc',
    'vote_count.asc',
    'vote_count.desc',
    'title.asc',
    'title.desc'
])

const languageEnum = z.enum(['pt-BR', 'en-US']).optional().default('pt-BR')

const typeEnum = z.enum(['movie', 'tv']).optional().default('movie')

export const getTrendingSchema = z.object({
    time: timeEnum.optional().default('day'),
    type: typeEnum,
    language: languageEnum
})

export type TrendingInput = z.infer<typeof getTrendingSchema>


export const discoverSchema = z.object({
    type: typeEnum,
    certification: z.string().optional(),
    'certification.gte': z.string().optional(),
    'certification.lte': z.string().optional(),
    certification_country: z.string().optional(),
    include_adult: z.coerce.boolean().optional().default(false),
    include_video: z.coerce.boolean().optional().default(false),
    language: languageEnum,
    page: page,
    primary_release_year: z.coerce.number().int().optional(),
    'primary_release_date.gte': z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    'primary_release_date.lte': z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    region: z.string().optional(),
    'release_date.gte': z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    'release_date.lte': z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    sort_by: sortByEnum.optional().default('popularity.desc'),
    'vote_average.gte': z.coerce.number().min(0).max(10).optional(),
    'vote_average.lte': z.coerce.number().min(0).max(10).optional(),
    'vote_count.gte': z.coerce.number().optional(),
    'vote_count.lte': z.coerce.number().optional(),
    watch_region: z.string().optional(),
    with_cast: z.string().optional(),
    with_companies: z.string().optional(),
    with_crew: z.string().optional(),
    with_genres: z.string().optional(),
    with_keywords: z.string().optional(),
    with_origin_country: z.string().optional(),
    with_original_language: z.string().optional(),
    with_people: z.string().optional(),
    with_release_type: z.string().regex(/^[1-6](\|[1-6])*$/).optional(),
    'with_runtime.gte': z.coerce.number().int().optional(),
    'with_runtime.lte': z.coerce.number().int().optional(),
    with_watch_monetization_types: z.string().optional(),
    with_watch_providers: z.string().optional(),
    without_companies: z.string().optional(),
    without_genres: z.string().optional(),
    without_keywords: z.string().optional(),
    without_watch_providers: z.string().optional(),
    year: z.coerce.number().int().optional()
})

export type DiscoverInput = z.infer<typeof discoverSchema>

export const topRatedSchema = z.object({
    page: page,
    language: languageEnum,
    type: typeEnum
})

export type TopRatedSchemaInput = z.infer<typeof topRatedSchema>

export const popularSchema = z.object({
    page: page,
    language: languageEnum,
    type: typeEnum
})

export type PopularInput = z.infer<typeof popularSchema>

export const genresSchema = z.object({
    type: typeEnum,
    force: z.coerce.boolean().optional().default(false),
    language: languageEnum
})

export type GenresInput = z.infer<typeof genresSchema>

export const similarSchema = z.object({
    page: page,
    type: typeEnum,
    language: languageEnum,
    similarId: z.string() // "120"
})

export type SimilarInput = z.infer<typeof similarSchema>

export const detailsSchema = z.object({
    type: typeEnum,
    id: z.coerce.number().int().positive(),
    language: languageEnum
})

export type DetailsInput = z.infer<typeof detailsSchema>