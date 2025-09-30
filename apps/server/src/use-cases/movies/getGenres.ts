import { MovieInterface } from "../../http/repo/movie.repo";
import TheMovieDBService from "../../services/tmdb.service";

export default function makeGetGenres(repo: MovieInterface, service: TheMovieDBService) {
    return async (data: { type: 'movie' | 'tv'; language: string; force?: boolean }) => {
        const { type, language, force = false } = data;
        
        let genres = await repo.getGenres(type, language);

        console.log(genres)
        
        if (genres.length === 0 || force) {
            const apiResponse = await service.getGenresFromAPI(type, language);
            const genresData = apiResponse.genres;
            
            await repo.createGenres(genresData, type, language);
            
            genres = await repo.getGenres(type, language);
        }
        
        return genres;
    }
}