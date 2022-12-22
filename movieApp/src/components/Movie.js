import React from "react";
import './Movie.css';



function Movie(props){
    return (

        <div>
           
                      

           <div className='movie'>      
           
				<img src={props.poster} alt={props.title} class='image'></img> 
				 
                 <div className="overlay">
                    <h3>{props.title}</h3>
                 </div>

             
                </div> 

        </div>

    )
}

export default Movie;