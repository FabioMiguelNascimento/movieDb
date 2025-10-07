import { Controller, Get, Query } from '@nestjs/common';
import { getTrendingSchema, TrendingInput } from '@repo/core';
import { ZodValidationPipe } from 'src/pipes/zodValidation.pipe';

@Controller('movies')
export class MoviesController {
    @Get()
    trending(@Query(new ZodValidationPipe(getTrendingSchema)) query: TrendingInput) {
        console.log(query)
    }
}
