export const poster = (posterPath: string, title: string, id: any) => {
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <div className="movie-item" key={id}>
      <img src={imageUrl} className="movie-poster" />
      <h3>{title}</h3>
    </div>
  );
};

export const movieImage = (posterPath: string) =>{
  const fallbackImage = "src/Home_page/Rendering.jpg";

  const baseUrl = "https://image.tmdb.org/t/p/w342/";
  const imageUrl = posterPath ? `${baseUrl}${posterPath}` : `${fallbackImage}`;

  return (
    <img src={imageUrl} className="movie-poster" />
  );
};

export default poster;
