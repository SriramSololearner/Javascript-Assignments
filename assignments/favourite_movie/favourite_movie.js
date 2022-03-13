const movies = [];  // movies ==> []

function favouriteMovie(operation, movie) {  // operation ==> add, movie ==> stranger things
    // Write your code here     
    if(operation === "add") {   // true
        movies.push(movie);     // movie  ==> movies ==["stranger things"]
    }
    if(operation === "remove"){  // false
        movie.pop();
    }
    return movies 
}

module.exports = favouriteMovie;
