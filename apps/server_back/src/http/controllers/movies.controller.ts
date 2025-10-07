import { DetailsInput, DiscoverInput, GenresInput, PopularInput, SimilarInput, TopRatedSchemaInput, TrendingInput } from "@repo/core/schemas/tmdb.schema";
import { NextFunction, Request, Response } from "express";
import TheMovieDBService from "../../services/tmdb.service";
import makeGetGenres from "../../use-cases/movies/getGenres";
import { success } from "../../utils/api-response.helper";
import MoviesRepository from "../repo/movies.repo";

export default class MoviesController {
    private moviesRepo: MoviesRepository;
    private moviesService: TheMovieDBService;
    private getGenresUseCase: ReturnType<typeof makeGetGenres>;

    constructor() {
        this.moviesRepo = new MoviesRepository();
        this.moviesService = new TheMovieDBService();
        this.getGenresUseCase = makeGetGenres(this.moviesRepo, this.moviesService);
    }

    getTrending = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: TrendingInput= req.validatedData

            const result = await this.moviesService.getTrending(data)
            return success(res, result, "Trending movies/series retrieved successfully")
        } catch (err) {
            next(err)
        }
    }

    getTopRated = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: TopRatedSchemaInput = req.validatedData

            const result = await this.moviesService.getTopRated(data)
            return success(res, result, "Trending movies retrieved successfully")
        } catch (err) {
            next(err)
        }
    }

    getPopular = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: PopularInput = req.validatedData

            const result = await this.moviesService.getPopular(data)
            return success(res, result, "Popular movies/TV retrieved successfully")
        } catch (err) {
            next(err)
        }
    }

    getGenres = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: GenresInput = req.validatedData

            const result = await this.getGenresUseCase(data)

            return success(res, result, "Genres retrieved successfully")
        } catch (err) {
            next(err)
        }
    }


    getSimilar = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: SimilarInput = req.validatedData

            const result = await this.moviesService.getSimilar(data)
            return success(res, result, "Similar movies/tv shows retrived sucessfully")
        } catch (err) {
            next(err)
        }

    }

    search = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: DiscoverInput = req.validatedData

            const result = await this.moviesService.discover(data)
            return success(res, result, "Filtred movies listed succesufuly")
        } catch (err) {
            next(err)
        }
    }

    getDetails = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: DetailsInput = req.validatedData

            const result = await this.moviesService.getDetails(data.type, data.id, data.language)
            return success(res, result, "Movie/TV details retrieved successfully")
        } catch (err) {
            next(err)
        }
    }
}