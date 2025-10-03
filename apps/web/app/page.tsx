'use client';

import { MoviesSection } from "@/components/movies-section";
import { Movie } from "@repo/core/types/api-response.types";

export default function Home() {
  const mockMovies: Movie[] = [
            {
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
            },
            {
                "adult": false,
                "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
                "genre_ids": [
                    28,
                    35,
                    10751
                ],
                "id": 1029575,
                "original_language": "en",
                "original_title": "The Family Plan",
                "overview": "Dan Morgan é muitas coisas: um marido dedicado, um pai amoroso, um reconhecido vendedor de carros. Ele também é um ex-assassino. E quando seu passado encontra seu presente, ele é forçado a levar sua desavisada família em uma viagem diferente de qualquer outra.",
                "popularity": 38.8546,
                "poster_path": "/3CezGI4ORSgVKk5Ch3UUWtL7SET.jpg",
                "release_date": "2023-12-14",
                "title": "Plano em Família",
                "video": false,
                "vote_average": 7.253,
                "vote_count": 1619
            },
            {
                "adult": false,
                "backdrop_path": "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
                "genre_ids": [
                    28,
                    12,
                    14,
                    878
                ],
                "id": 19995,
                "original_language": "en",
                "original_title": "Avatar",
                "overview": "Apesar de não ter mais os movimentos da perna, o ex-fuzileiro naval Jake Sully ainda sente que pode ser um guerreiro. Sua intuição começa a se tornar realidade quando ele viaja anos-luz até a estação espacial montada no Planeta Pandora. Habitado por grandes seres azuis, os Na´vi, o local tem uma atmosfera fatal para qualquer terrestre. Por isso, oficiais criaram o programa Avatar, em que um corpo biológico, híbrido de humano e Na´vi, pode ser comandado a distância.",
                "popularity": 25.4807,
                "poster_path": "/iNMP8uzV2Ing6ZCw0IICgEFVNfC.jpg",
                "release_date": "2009-12-15",
                "title": "Avatar",
                "video": false,
                "vote_average": 7.593,
                "vote_count": 32656
            },
            {
                "adult": false,
                "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
                "genre_ids": [
                    28,
                    80,
                    53,
                    12,
                    9648
                ],
                "id": 385687,
                "original_language": "en",
                "original_title": "Fast X",
                "overview": "Dom Toretto enfrenta seu maior desafio até agora: a corrida para salvar a família de um inimigo cheio de rancor e fúria no volante.",
                "popularity": 26.1474,
                "poster_path": "/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg",
                "release_date": "2023-05-17",
                "title": "Velozes & Furiosos 10",
                "video": false,
                "vote_average": 7,
                "vote_count": 6056
            },
            {
                "adult": false,
                "backdrop_path": "/qJzloL8O9YHhiWBrhlPfKAtZu2I.jpg",
                "genre_ids": [
                    28,
                    878
                ],
                "id": 557,
                "original_language": "en",
                "original_title": "Spider-Man",
                "overview": "Peter Parker é um jovem estudioso que vive com seus tios, Ben e May, desde que seus pais faleceram. Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que uma aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha.",
                "popularity": 17.8638,
                "poster_path": "/2WIwz0qJpnVAiofTAhrmhbKxuvE.jpg",
                "release_date": "2002-05-01",
                "title": "Homem-Aranha",
                "video": false,
                "vote_average": 7.316,
                "vote_count": 19928
            },
            {
                "adult": false,
                "backdrop_path": "/x1ZKRyvB7QAXfYVgf5mUJzjPqfH.jpg",
                "genre_ids": [
                    28,
                    12,
                    53
                ],
                "id": 575264,
                "original_language": "en",
                "original_title": "Mission: Impossible - Dead Reckoning Part One",
                "overview": "Ethan Hunt e sua equipe embarcam em sua missão mais perigosa: rastrear uma nova arma aterrorizante que ameaça toda a humanidade antes que caia em mãos erradas. Com o controle do futuro e o destino do mundo em jogo e as forças sombrias do passado de Ethan se aproximando, uma corrida mortal ao redor do globo começa. Confrontado por um inimigo misterioso e todo-poderoso, Ethan é forçado a considerar que nada pode importar mais do que sua missão – nem mesmo a vida daqueles com quem ele mais se importa.",
                "popularity": 15.9307,
                "poster_path": "/8hjno4uE19pm0qlfUDcM8e5WK13.jpg",
                "release_date": "2023-07-08",
                "title": "Missão: Impossível - Acerto de Contas Parte 1",
                "video": false,
                "vote_average": 7.519,
                "vote_count": 4636
            },
            {
                "adult": false,
                "backdrop_path": "/vamhMTvh9m9zFHDoR0v1nRtf6T4.jpg",
                "genre_ids": [
                    28,
                    12,
                    878
                ],
                "id": 429617,
                "original_language": "en",
                "original_title": "Spider-Man: Far From Home",
                "overview": "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.",
                "popularity": 15.4473,
                "poster_path": "/8V0hpq8BUzauB06eEfr7AmyTzbK.jpg",
                "release_date": "2019-06-28",
                "title": "Homem-Aranha: Longe de Casa",
                "video": false,
                "vote_average": 7.402,
                "vote_count": 16361
            },
            {
                "adult": false,
                "backdrop_path": "/v4YV4ne1nwNni35iz4WmpZRZpCD.jpg",
                "genre_ids": [
                    28,
                    18,
                    36
                ],
                "id": 724495,
                "original_language": "en",
                "original_title": "The Woman King",
                "overview": "Nanisca era a comandante do exército do Reino de Daomé, um dos locais mais poderosos da África nos séculos XVII e XIX. Durante o período, o grupo militar era composto apenas por mulheres, entre as guerreiras está a filha de Nanisca, Nawi, juntas elas combateram os colonizadores franceses, tribos rivais e todos aqueles que tentaram escravizar seu povo e destruir suas terras.",
                "popularity": 13.4839,
                "poster_path": "/dTXXXMwZ30LVf51nJvh2QGKPIY6.jpg",
                "release_date": "2022-09-16",
                "title": "A Mulher Rei",
                "video": false,
                "vote_average": 7.642,
                "vote_count": 2246
            },
            {
                "adult": false,
                "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
                "genre_ids": [
                    878,
                    12,
                    28,
                    35
                ],
                "id": 447365,
                "original_language": "en",
                "original_title": "Guardians of the Galaxy Vol. 3",
                "overview": "Peter Quill, que ainda está se recuperando da perda de Gamora, tem que reunir a sua equipe para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.",
                "popularity": 17.0068,
                "poster_path": "/4yycSPnchdNAZirGkmCYQwTd3cr.jpg",
                "release_date": "2023-05-03",
                "title": "Guardiões da Galáxia: Vol. 3",
                "video": false,
                "vote_average": 7.93,
                "vote_count": 7683
            },
            {
                "adult": false,
                "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
                "genre_ids": [
                    28,
                    878,
                    12
                ],
                "id": 588228,
                "original_language": "en",
                "original_title": "The Tomorrow War",
                "overview": "Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.",
                "popularity": 13.2206,
                "poster_path": "/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg",
                "release_date": "2021-09-03",
                "title": "A Guerra do Amanhã",
                "video": false,
                "vote_average": 7.491,
                "vote_count": 3826
            },
            {
                "adult": false,
                "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
                "genre_ids": [
                    878,
                    12,
                    28
                ],
                "id": 667538,
                "original_language": "en",
                "original_title": "Transformers: Rise of the Beasts",
                "overview": "Nesta aventura cheia de adrenalina, Optimus Prime e os Autobots enfrentam seu maior desafio até agora. Quando uma nova ameaça capaz de destruir todo o planeta surge, eles devem se unir a uma poderosa facção conhecida como os Maximals. Com o destino da humanidade em jogo, Noah (Anthony Ramos) e Elena (Dominique Fishback) farão o que for preciso para ajudar os Transformers na batalha final para salvar a Terra.",
                "popularity": 12.953,
                "poster_path": "/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg",
                "release_date": "2023-06-06",
                "title": "Transformers: O Despertar das Feras",
                "video": false,
                "vote_average": 7.209,
                "vote_count": 5035
            },
            {
                "adult": false,
                "backdrop_path": "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
                "genre_ids": [
                    12,
                    28,
                    18
                ],
                "id": 980489,
                "original_language": "en",
                "original_title": "Gran Turismo",
                "overview": "Baseado na história de Jann Mardenborough, e relata a trajetória de um jogador de videogame que utilizou suas habilidades nos simuladores para se tornar um piloto profissional de verdade.",
                "popularity": 13.3184,
                "poster_path": "/qU60nhBRbKU23gIGrZi2CvUj6MQ.jpg",
                "release_date": "2023-08-09",
                "title": "Gran Turismo: De Jogador a Corredor",
                "video": false,
                "vote_average": 7.745,
                "vote_count": 3119
            },
            {
                "adult": false,
                "backdrop_path": "/1GU0jS5ZG5MhfdDrpj8s9XxbgJJ.jpg",
                "genre_ids": [
                    28,
                    12,
                    878
                ],
                "id": 505642,
                "original_language": "en",
                "original_title": "Black Panther: Wakanda Forever",
                "overview": "A rainha Ramonda, Shuri, M'Baku, Okoye e as poderosas Dora Milaje lutam para proteger sua nação após a morte do rei T'Challa. Com a ajuda da Cão de Guerra Nakia e de Everett Ross, eles tentam encontrar um novo caminho para Wakanda.",
                "popularity": 12.8114,
                "poster_path": "/nj9cgMhqXQJkXutKmvVelKNP1Aa.jpg",
                "release_date": "2022-11-09",
                "title": "Pantera Negra: Wakanda para Sempre",
                "video": false,
                "vote_average": 7.035,
                "vote_count": 7035
            },
            {
                "adult": false,
                "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
                "genre_ids": [
                    18,
                    28
                ],
                "id": 677179,
                "original_language": "en",
                "original_title": "Creed III",
                "overview": "Depois de dominar o mundo do boxe, Adonis Creed tem prosperado em sua carreira e vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damien Anderson, ressurge depois de cumprir uma longa sentença na prisão, ele está ansioso para provar que merece sua chance no ringue. O confronto entre ex-amigos é mais do que apenas uma briga. Para acertar as contas, Adonis deve colocar seu futuro em risco para lutar contra Damien - um lutador que não tem nada a perder.",
                "popularity": 11.3432,
                "poster_path": "/kLgmZVrRVY41FWCCidi9IqmM473.jpg",
                "release_date": "2023-03-01",
                "title": "Creed III",
                "video": false,
                "vote_average": 7.095,
                "vote_count": 2719
            },
            {
                "adult": false,
                "backdrop_path": "/iQcCAm8hKWZyUntqrvzyEGtXyJl.jpg",
                "genre_ids": [
                    878,
                    28,
                    12
                ],
                "id": 670292,
                "original_language": "en",
                "original_title": "The Creator",
                "overview": "Em meio a uma futura guerra entre a raça humana e as forças da inteligência artificial, Joshua, um endurecido ex-agente das forças especiais que lamenta o desaparecimento de sua esposa, é recrutado para caçar e matar o Criador, o indescritível arquiteto da IA avançada que desenvolveu uma arma misteriosa com o poder de acabar com a guerra - e a própria humanidade.",
                "popularity": 7.3454,
                "poster_path": "/voSZpfKrqdZ53oRw9kng74LPs1s.jpg",
                "release_date": "2023-09-27",
                "title": "Resistência",
                "video": false,
                "vote_average": 7.032,
                "vote_count": 3515
            },
            {
                "adult": false,
                "backdrop_path": "/7JqWWLCajnt6XWCrRlgvtsYP0u6.jpg",
                "genre_ids": [
                    28,
                    18
                ],
                "id": 678512,
                "original_language": "en",
                "original_title": "Sound of Freedom",
                "overview": "A história de Tim Ballard, um ex-agente do governo dos EUA, que largou seu emprego para dedicar sua vida a resgatar crianças de traficantes sexuais globais.",
                "popularity": 5.912,
                "poster_path": "/hwOHbymoAhjrMx7v5ShHCNIP4NI.jpg",
                "release_date": "2023-07-03",
                "title": "Som da Liberdade",
                "video": false,
                "vote_average": 7.989,
                "vote_count": 2605
            },
            {
                "adult": false,
                "backdrop_path": "/tY36rkGlREg5m9CaguckR8jZCye.jpg",
                "genre_ids": [
                    10752,
                    18,
                    28
                ],
                "id": 653851,
                "original_language": "en",
                "original_title": "Devotion",
                "overview": "A história real dos pilotos estadunidenses Jesse Brown e Tom Hudner, dois jovens de mundos muito diferentes. Os dois iniciaram a carreira militar juntos no VF-32 e ao longo do serviço eles são levados ao limite, voando em um jato de combate. Jesse e Tom se tornam amigos e começam a superar cada vez mais desafios lado a lado, mas tudo muda quando um deles é abatido atrás das linhas inimigas.",
                "popularity": 4.5487,
                "poster_path": "/cxyiG2FWcNDDVSnyRw1eBabsAzp.jpg",
                "release_date": "2022-11-23",
                "title": "Irmãos de Honra",
                "video": false,
                "vote_average": 7.082,
                "vote_count": 777
            },
            {
                "adult": false,
                "backdrop_path": "/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg",
                "genre_ids": [
                    16,
                    28,
                    878
                ],
                "id": 886396,
                "original_language": "en",
                "original_title": "Batman and Superman: Battle of the Super Sons",
                "overview": "Jonathan Kent e o jovem companheiro relutante Damian Wayne estão encarregados de salvar o mundo da destruição iminente. Os dois devem unir forças para resgatar seus pais e salvar o planeta, tornando-se os super-heróis que deveriam ser.",
                "popularity": 3.6692,
                "poster_path": "/jkJjwFsZeQByufSkoY52SsmxdP0.jpg",
                "release_date": "2022-10-17",
                "title": "Batman e Superman: Batalha dos Super Filhos",
                "video": false,
                "vote_average": 7.647,
                "vote_count": 330
            }
        ]

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <MoviesSection
          title="Filmes em Destaque"
          movies={mockMovies}
          seeMoreHref="/movies/trending"
          className="mb-12"
        />

      </div>
    </div>
  );
}
