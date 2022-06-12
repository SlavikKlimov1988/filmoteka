const axios = require('axios');

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `476dab1d501621899284a1a134c160d7`;
const movie_id = `526896`; // in original func

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// login: project-group-6, password: project-group-6
// API key:  3c9b3437ebab156a512248e157c99300

export default class NewsApiService {

    constructor() {
        this.searchQuery = 'land'; // in original 'space'
        this.page = 1;
     }
 
    async fetchTrend() {
        const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${this.page}`
 
        const data = await axios.get(url);
      
        
        return data;
    };

    // incrementPage() {
    //     this.page += 1;
    // };
  
   // choosePage() {
    //     this.page += 5;
    // };

    resetPage() {
        this.page = 1;
    }

   async fetchSerchQuery() {
        const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${this.searchQuery}`

        const data = await axios.get(url);
             
        return data;
  };
  
  async fetchMovieById() {
        const url = `${BASE_URL}/movie/${movie_id}?api_key=${KEY}&query=${this.searchQuery}`

        const data = await axios.get(url);
             
        return data;
  };

  async fetchGenres() {
        const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}&query=${this.searchQuery}`

        const data = await axios.get(url);
             
        return data;
  };
  
  get query() {
        return this.searchQuery;
    };

  set query(newQuery) {
        this.searchQuery = newQuery;
    }

}
