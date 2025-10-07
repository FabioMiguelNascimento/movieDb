import { DetailsInput, detailsSchema } from '@repo/core/schemas/tmdb.schema';
import TheMovieDBService from '../../services/tmdb.service';

export async function getDetails(data: DetailsInput) {
    const validatedData = detailsSchema.parse(data);
    const tmdbService = new TheMovieDBService();
    return tmdbService.getDetails(validatedData.type, validatedData.id, validatedData.language);
}
