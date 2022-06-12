
import NewsApiService from './api-service';
import getRefs from './getRefs';

import listOfCards from '../templates/poster.hbs';

// =========================================================

const newsApiService = new NewsApiService();
const refs = getRefs();


// refs.form.addEventListener('submit', onFormSubmit);
// ===============================================================
async function onSerchQuery() {
    
    try {
        // newsApiService.searchQuery = refs.input.value;
        newsApiService.resetPage();
   
        const data = await newsApiService.fetchSerchQuery();
      console.dir(data.data.results[0].release_date); 
      const response = data.data.results;
        const releaseYear = new Date(response[0].release_date).getFullYear();
       
        console.dir(releaseYear);
        console.log('Пошук за ключовим словом:', response);
      getRenderQuery(response,releaseYear); 
   
          
      } catch (error) {
        // onFetchError()  
        console.dir(error)
      }          
}

// onSerchQuery();
// ==============================================================
async function onTrend() {
    
    try {
        
        newsApiService.resetPage();
   
        const data = await newsApiService.fetchTrend();
       
      const response = data.data.results;
        const releaseYear = new Date(response[0].release_date).getFullYear();
   
      getRenderQuery(response,releaseYear); 
        console.log('У тренді:',response);
          
      } catch (error) {
        // onFetchError()  
        console.dir(error)
      }          
}




// окремо отримуємо запит  масив жанри {name,id}  genres: [{id: 28, name: "Action"}, ...]
async function getGenresById() {
    
    try {
        newsApiService.resetPage();
   
        const data = await newsApiService.fetchGenres();
       
      const genres = data.data.genres;
        
    
        console.log('жанри:',genres);
          
      } catch (error) {
          
        console.dir(error)
      }          
}

getGenresById();

async function getMovieById() {
    
    try {
        newsApiService.resetPage();
   
        const data = await newsApiService.fetchMovieById();
       
      const objectMovie = data.data;
        
    
        console.log('Обєкт фільм:', objectMovie);
        console.log( 'belongs_to_collection', objectMovie.belongs_to_collection) 
      } catch (error) {
          
        console.dir(error)
      }          
}

getMovieById();

function getRenderQuery(item,releaseYear) {

    console.log(releaseYear);
   
    refs.ul.insertAdjacentHTML('beforeend',listOfCards(item,releaseYear));
  
}

onTrend();



// const handleListClick = (event) => {
//     console.log(event.currentTarget);
// };
// refs.ul.addEventListener('click', handleListClick);