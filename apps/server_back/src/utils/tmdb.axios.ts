import axios from 'axios'
import {env} from '../schemas/utils/env.schema'

export const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer ${env.TMDB_ACCESS_TOKEN_AUTH}`
    }
})