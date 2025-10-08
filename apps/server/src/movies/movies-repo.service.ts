import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/db';
import { IMovies } from './movies.interface';

@Injectable()
export class MoviesRepoService implements IMovies {
      async getGenres(type: "movie" | "tv", language: string): Promise<any[]> {
        return prisma.genre.findMany({
            where: { type, language },
            orderBy: { name: 'asc' }
        });
    }

    async createGenres(genres: any[], type: 'movie' | 'tv', language: string): Promise<void> {
        for (const g of genres) {
            await prisma.genre.upsert({
                where: { id_type_language: { id: g.id, type, language } },
                update: {},
                create: { id: g.id, name: g.name, type, language }
            });
        }
    }
}