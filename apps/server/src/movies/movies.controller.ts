import { Controller, Get, Param, Query } from '@nestjs/common';
import type { DetailsInput, DiscoverInput, GenresInput, PopularInput, SimilarInput, TopRatedSchemaInput, TrendingInput } from '@repo/core';
import { detailsSchema, discoverSchema, genresSchema, getTrendingSchema, popularSchema, similarSchema, topRatedSchema } from '@repo/core';
import { ApiResponseHelper } from '../common/helpers/api-response.helper';
import { ZodValidationPipe } from '../common/pipes/zodValidation.pipe';
import { MoviesRepoService } from './movies-repo.service';
import { MoviesService } from './movies.service';
import makeGetGenres from './use-cases/getGenres';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService,
        private readonly apiResponse: ApiResponseHelper,
        private readonly moviesRepo: MoviesRepoService
    ) { }

    @Get('trending')
    async trending(@Query(new ZodValidationPipe(getTrendingSchema)) query: TrendingInput) {
        const data = await this.moviesService.getTrending(query);
        return this.apiResponse.success(data, "Em alta listados com sucesso");
    }

    @Get('top-rated')
    async topRated(@Query(new ZodValidationPipe(topRatedSchema)) query: TopRatedSchemaInput) {
        const data = await this.moviesService.getTopRated(query)
        return this.apiResponse.success(data, "Melhores listados com sucesso")
    }

    @Get('popular')
    async popular(@Query(new ZodValidationPipe(popularSchema)) query: PopularInput) {
        const data = await this.moviesService.getPopular(query);
        return this.apiResponse.success(data, "Populares listados com sucesso");
    }

    @Get('genres')
    async genres(@Query(new ZodValidationPipe(genresSchema)) query: GenresInput) {
        
        const getGenresUseCase = makeGetGenres(this.moviesRepo, this.moviesService)
        const data = await getGenresUseCase(query)

        return this.apiResponse.success(data, "Gêneros listados com sucesso");
    }

    @Get('similar')
    async similar(@Query(new ZodValidationPipe(similarSchema)) query: SimilarInput) {
        const data = await this.moviesService.getSimilar(query);
        return this.apiResponse.success(data, "Similares listados com sucesso");
    }

    @Get('search')
    async search(@Query(new ZodValidationPipe(discoverSchema)) query: DiscoverInput) {
        const data = await this.moviesService.discover(query);
        return this.apiResponse.success(data, "Filtrados listados com sucesso");
    }

    @Get('details/:type/:id')
    async details(@Param(new ZodValidationPipe(detailsSchema)) params: DetailsInput) {
        const data = await this.moviesService.getDetails(params.type, params.id, params.language);
        return this.apiResponse.success(data, "Detalhes listados com sucesso");
    }

}
