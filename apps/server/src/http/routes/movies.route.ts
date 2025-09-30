import { getTrandingSchema, similarSchema, topRatedSchema } from "@repo/core/schemas/tmdb.schema"
import { Router } from 'express'
import { validateQuery } from '../../middleware/validateRequest.middleware'
import MoviesController from '../controllers/movies.controller'

const router: Router = Router()

const controller = new MoviesController()

router.get('/tranding', validateQuery(getTrandingSchema), controller.getAll)
router.get('/top-rated', validateQuery(topRatedSchema), controller.getTopRated)
router.get('/similar', validateQuery(similarSchema), controller.getSimilar)

export default router