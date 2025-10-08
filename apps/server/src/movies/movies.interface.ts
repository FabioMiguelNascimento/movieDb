export interface IMovies {
    getGenres(type: 'movie' | 'tv', language: string): Promise<any[]>;
    createGenres(genres: any[], type: 'movie' | 'tv', language: string): Promise<void>;
}
