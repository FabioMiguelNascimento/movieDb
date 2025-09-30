import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from "express";
import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/not-found.middleware';
import { env } from './schemas/utils/env.schema';
import pingRoute from './routes/ping.route';

const app = express();
const port = env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/api/ping', pingRoute)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});