export const poster = (posterPath: string,title: string, id: any) => {

const baseUrl = "https://image.tmdb.org/t/p/w342/";

return(
  <div className="movie-item" key={id}>
        <img 
              src={`${baseUrl}${posterPath}`} 
              className="movie-poster"
            />
        <h3>{title}</h3> 
  </div>
);

};

export default poster;