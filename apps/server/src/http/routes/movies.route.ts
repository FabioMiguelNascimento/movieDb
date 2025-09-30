import { discoverSchema, genresSchema, getTrandingSchema, popularSchema, similarSchema, topRatedSchema } from "@repo/core/schemas/tmdb.schema"
import { Router } from 'express'
import { validateQuery } from '../../middleware/validateRequest.middleware'
import MoviesController from '../controllers/movies.controller'

const router: Router = Router()

const controller = new MoviesController()

router.get('/trendind', validateQuery(getTrandingSchema), controller.getTrending)
router.get('/top-rated', validateQuery(topRatedSchema), controller.getTopRated)
router.get('/popular', validateQuery(popularSchema), controller.getPopular)
router.get('/genres', validateQuery(genresSchema), controller.getGenres)
router.get('/similar', validateQuery(similarSchema), controller.getSimilar)
router.get('/search', validateQuery(discoverSchema), controller.search)

export default router