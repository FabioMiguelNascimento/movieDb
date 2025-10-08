import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { ApiResponseHelper } from '../common/helpers/api-response.helper';
import { MoviesRepoService } from './movies-repo.service';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [
    MoviesService,
    ApiService,
    ApiResponseHelper,
    MoviesRepoService,
  ],
})
export class MoviesModule {}
