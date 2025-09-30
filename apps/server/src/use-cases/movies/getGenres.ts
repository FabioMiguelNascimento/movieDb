import { MovieInterface } from "../../http/repo/movie.repo";
import TheMovieDBService from "../../services/tmdb.service";

export default function makeGetGenres(repo: MovieInterface, service: TheMovieDBService) {
    return async (data: { type: 'movie' | 'tv'; force?: boolean }) => {
        const { type, force = false } = data;
        
        let genres = await repo.getGenres(type);
        
        if (genres.length === 0 || force) {
            const apiResponse = await service.getGenresFromAPI(type);
            const genresData = apiResponse.genres;
            
            await repo.createGenres(genresData, type);
            
            genres = await repo.getGenres(type);
        }
        
        return genres;
    }
}