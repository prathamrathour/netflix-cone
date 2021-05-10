const API_KEY = "9d5b453668e03ddcc7d98752bf3dd886";

const requests={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=9d5b453668e03ddcc7d98752bf3dd886&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=9d5b453668e03ddcc7d98752bf3dd886&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=9d5b453668e03ddcc7d98752bf3dd886&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=9d5b453668e03ddcc7d98752bf3dd886&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=9d5b453668e03ddcc7d98752bf3dd886&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
};
export default requests;