import prisma from "@repo/db";

export interface MovieInterface {
    getGenres(type: 'movie' | 'tv'): Promise<any[]>;
    createGenres(genres: any[], type: 'movie' | 'tv'): Promise<void>;
}


export default class MoviesRepository implements MovieInterface {
    async getGenres(type: "movie" | "tv"): Promise<any[]> {
        return prisma.genre.findMany({
            where: { type },
            orderBy: { name: 'asc' }
        });
    }

    async createGenres(genres: any[], type: 'movie' | 'tv'): Promise<void> {
        const data = genres.map(g => ({
            id: g.id,
            name: g.name,
            type
        }));
        await prisma.genre.createMany({
            data,
            skipDuplicates: true
        });
    }
}