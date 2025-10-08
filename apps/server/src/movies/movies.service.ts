import { Injectable } from '@nestjs/common';
import { DiscoverInput, PopularInput, SimilarInput, TopRatedSchemaInput, TrendingInput } from '@repo/core';
import { env } from '../../schemas/env.schema';
import { ApiService } from '../api/api.service';

@Injectable()
export class MoviesService {
    private readonly tmdbBaseUrl = 'https://api.themoviedb.org/3';
    private readonly apiToken: string
    private readonly apiKey: string;

    constructor(private readonly apiService: ApiService) {
        this.apiKey = env.THE_MOVIE_DB_API_KEY;
        this.apiToken = env.TMDB_ACCESS_TOKEN_AUTH

        this.apiService.setBaseURL(this.tmdbBaseUrl);
        this.apiService.setDefaultHeaders({ Authorization: `Bearer ${this.apiToken}` });
    }

    private async callAPI<T = any>(endpoint: string, method: 'get' | 'post' | 'put' | 'delete' = 'get', params?: Record<string, any>, query?: Record<string, any>, body?: any): Promise<T> {
        try {
            const response = await this.apiService.request<T>(method, endpoint, body, { params: query });
            return response.data;
        } catch (error) {
            throw new Error(`API call failed: ${error.response?.statusText || error.message}`);
        }
    }

    async testApi() {
        return this.callAPI("/authentication", 'get')
    }

    async getTrending(data: TrendingInput) {
        return this.callAPI(`/trending/${data.type}/${data.time}`, 'get', undefined, { language: data.language });
    }

    async getTopRated(data: TopRatedSchemaInput) {
        const { type, ...query } = data;
        return this.callAPI(`/${type}/top_rated`, 'get', undefined, query);
    }

    async getPopular(data: PopularInput) {
        const { type, ...query } = data;
        return this.callAPI(`/${type}/popular`, 'get', undefined, query);
    }

    async getGenresFromAPI(type: 'movie' | 'tv', language: string) {
        return this.callAPI(`/genre/${type}/list`, 'get', undefined, { language });
    }

    async getSimilar(data: SimilarInput) {
        const { type, similarId, ...query } = data
        return this.callAPI(`/${data.type}/${data.similarId}/similar`, 'get', undefined, query)
    }

    async getDetails(type: 'movie' | 'tv', id: number, language: string = 'pt-BR') {
        return this.callAPI(`/${type}/${id}`, 'get', undefined, { language, append_to_response: 'videos,credits' });
    }

    async discover(data: DiscoverInput) {
        const { type, ...query } = data
        return this.callAPI(`/discover/${data.type}`, 'get', undefined, query)
    }
}
