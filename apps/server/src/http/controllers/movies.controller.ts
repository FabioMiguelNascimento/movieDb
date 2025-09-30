import { NextFunction, Request, Response } from "express";
import TheMovieDBService from "../../services/tmdb.service";
import { success } from "../../utils/api-response.helper";
import MoviesRepository from "../repo/movie.repo";

export default class MoviesController {
    private moviesRepo: MoviesRepository;
    private moviesService: TheMovieDBService

    constructor() {
        this.moviesRepo = new MoviesRepository();
        this.moviesService = new TheMovieDBService();
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { time } = req.validatedData

            const result = await this.moviesService.getTrading(time)
            return success(res, result, "Trending movies retrieved successfully")
        } catch (err) {
            next(err)
        }
    }

}