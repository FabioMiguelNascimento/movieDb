'use client';

import MovieCard from "@/components/movie-card";

export default function Home() {
  
  const data = {
      "adult": false,
      "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
      "genre_ids": [
          878,
          12,
          28
      ],
      "id": 76600,
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.",
      "popularity": 46.3515,
      "poster_path": "/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
      "release_date": "2022-12-14",
      "title": "Avatar: O Caminho da Água",
      "video": false,
      "vote_average": 7.61,
      "vote_count": 12904
  };
  
  return (
        
        <div className="flex justify-center">
          <MovieCard 
            id={data.id}
            description={data.overview}
            genres={data.genre_ids}
            imgUrl={data.poster_path}
            rating={data.vote_average}
            releaseDate={data.release_date}
            title={data.title}
          />
    </div>
  );
}
