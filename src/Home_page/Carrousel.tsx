import useApiCall from "./apiCall";
import poster from "./poster";
import useScrollButtons from "./scroll_Buttons";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

export const Carrousel = (resource: string) => {

    const { containerRef, smoothScroll} = useScrollButtons();

    const {data} = useApiCall(resource);

    const moviesToDisplay = data.slice(0, 10);

    return (
        <div className="scroll-container">
                    <button className="scroll-left" onClick={() => smoothScroll(-355)} > <ArrowBackIosNewIcon/></button>
                    <div ref={containerRef} className="movies-container">
                        {moviesToDisplay.map((movie) => (
                            <div key={movie.id} className="movie-item">
                                {poster(movie.poster_path, movie.title, movie.id)}
                            </div>
                        ))}
                    </div>
                    <button className="scroll-right" onClick={() => smoothScroll(355)}><ArrowForwardIos/></button>
                </div>
    );

};

export default Carrousel;