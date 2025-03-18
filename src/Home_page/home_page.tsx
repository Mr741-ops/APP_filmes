//merges every script that belogs on the home page

import "./homePage.css"
import Carrousel from "./Carrousel";


const HomePage = () => {
    
    return (
      <div>
        <h1>Popular Films</h1>
        {Carrousel("movie/popular")}
        <br/>
        <h1>Top Rated</h1>
        {Carrousel("movie/top_rated")}
      </div>

    );
};

export default HomePage;