import { useEffect } from "react"; // Import the useEffect hook from react
import Card from 'react-bootstrap/Card'; // Import the Card component from react-bootstrap
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

const MovieItem = (props)=> { // Define a functional component called MovieItem that takes a prop called mymovie
  useEffect(() => { // Use an effect hook to log the mymovie prop to the console
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return ( // Return a card with the movie title, year, and poster
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header> 
        <Card.Body>
          <blockquote className="blockquote mb-0">  {/* Add a blockquote with the movie title, year, and poster */}
            <img src={props.mymovie.poster} alt={props.mymovie.title} /> {/* Add an image with the movie poster */}
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link> {/* Add a link to the edit page */}
      </Card>
    </div>
  );
}

export default MovieItem; // Export the MovieItem component