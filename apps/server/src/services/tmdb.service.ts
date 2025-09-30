import { GenresInput, PopularInput, SimilarInput, TopRatedSchemaInput } from '@repo/core/schemas/tmdb.schema';
import { tmdb } from '../utils/tmdb.axios';

export default class TheMovieDBService {
    private async callAPI<T = any>(endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', params?: Record<string, any>, query?: Record<string, any>, body?: any): Promise<T> {
            const config: any = {};
            if (query) {
                config.params = query;
            }
            if (body) {
                config.data = body;
            }
            try {
                const response = await tmdb.request({
                    url: endpoint,
                    method,
                    ...config
                });
                return response.data;
            } catch (error) {
                throw new Error(`API call failed: ${error.response?.statusText || error.message}`);
            }
        }

    
        async testApi() {
            return this.callAPI("/authentication", 'GET')
        }

        async getTrending(time: 'day' | 'week') {
            if(!time) {
                time = 'day'
            }

            return this.callAPI(`/trending/all/${time}`)
        }

        async getTopRated(data: TopRatedSchemaInput) {
            const { type, ...query } = data;
            return this.callAPI(`/${type}/top_rated`, 'GET', undefined, query);
        }

        async getPopular(data: PopularInput) {
            const { type, ...query } = data;
            return this.callAPI(`/${type}/popular`, 'GET', undefined, query);
        }

        async getGenresFromAPI(type: 'movie' | 'tv') {
            return this.callAPI(`/genre/${type}/list`);
        }

        async getSimilar(data: SimilarInput) {
            const { type, similarId, ...query} = data
            return this.callAPI(`/${data.type}/${data.similarId}/similar`, 'GET', undefined, query)
        }
}