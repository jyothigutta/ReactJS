import './App.css';
import Movie from './components/Movie';
import logo from './components/images/logo.JPG'
import './bootstrap.min.css';


const ctnwatchmovielist = [
  {"Title":"Kantara","Year":"2022","imdbID":"tt15327088","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjQyNGI5OWEtZjI1Yy00NDVjLWE4MTAtMzRlNzU1NzM2OGVkXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_SX300.jpg"},
  {"Title":"Drishyam 2","Year":"2022","imdbID":"tt15501640","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmY2ZDUxNzUtYWZlYy00MThhLWI5NjktZDhjZTU3MDY5YTM3XkEyXkFqcGdeQXVyNTYxMDgzODI@._V1_SX300.jpg"},
  {"Title":"Fast & Furious 6","Year":"2013","imdbID":"tt1905041","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"},
  {"Title":"1: Nenokkadine","Year":"2014","imdbID":"tt2375559","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzcwMzkwODE1NF5BMl5BanBnXkFtZTgwNzA1NzAwMTE@._V1_SX300.jpg"},
  {"Title":"Vikram","Year":"2022","imdbID":"tt9179430","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_SX300.jpg"}
  
  ]


const kidsmovielist = [

{ "Title": "Cars", "Year": "2006", "imdbID": "tt0317219", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg" },
 { "Title": "Cars 2", "Year": "2011", "imdbID": "tt1216475", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg" }, { "Title": "Cars 3", "Year": "2017", "imdbID": "tt3606752", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg" },
 {"Title":"Frozen","Year":"2013","imdbID":"tt2294629","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"},{"Title":"Frozen II","Year":"2019","imdbID":"tt4520988","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"}
 


]

const telugumovielist = [

   
   {"Title":"RRR","Year":"2022","imdbID":"tt8178634","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},
   {"Title":"Sita Ramam","Year":"2022","imdbID":"tt20850406","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg"},
   {"Title":"Shyam Singha Roy","Year":"2021","imdbID":"tt13349716","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGU2NDExODgtMjU0Ni00NTQ1LWJjMTctMGI3MDA4YzRlMmY2XkEyXkFqcGdeQXVyMTA5MjQ4MDg4._V1_SX300.jpg"},
   {"Title":"Karthikeya 2","Year":"2022","imdbID":"tt13664684","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzFhZTE0NDAtMWNiYy00NDEwLWJkODctZWExZmIwZmM2ZjM5XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_SX300.jpg"},
   {"Title":"Pushpa: The Rise - Part 1","Year":"2021","imdbID":"tt9389998","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjA4ZDJmNmQtZTA4NS00NzhmLTg2ODktZjg3MDliZmUzYTZmXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg"},
   
  
  
  ]

function App() {
  return (
<div>

  <div className='header'>
  <img src={logo} ></img> 
  </div>
<p>Telugu Movies</p>
    <div className='parent-movie'>
    <div className='movie-container'>

    


      {telugumovielist.map(i => <Movie title={i.Title} poster={i.Poster} ></Movie>   )}
      

      

       

    </div>
    </div>


    <p>Kids Movies</p>
    <div className='parent-movie'>
    <div className='movie-container'>

    


      
      

      {kidsmovielist.map(i => <Movie title={i.Title} poster={i.Poster} ></Movie>   )}

       

    </div>
    </div>

    <p>Continue Watching</p>
    <div className='parent-movie'>
    <div className='movie-container'>

    


      {ctnwatchmovielist.map(i => <Movie title={i.Title} poster={i.Poster} ></Movie>   )}
      

      

       

    </div>
    </div>






    </div>



  );
}

export default App;
