import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from "express";
import pingRoute from './http/routes/ping.route';
import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/not-found.middleware';
import { env } from './schemas/utils/env.schema';
import moviesRoute from './http/routes/movies.route';

const app = express();
const port = env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/api/ping', pingRoute)
app.use('/api/movies', moviesRoute)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});