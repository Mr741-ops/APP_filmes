import { Admin, CustomRoutes } from "react-admin";
import { dataProvider } from "./Data/dataProvider";
import { Route } from "react-router-dom";
import MyLayout from "./MyLayout";
import HomePage from "./Home_page/home_page";
import { theme } from "./theme.tsx";
import MoviePage from "./Movie_page/movie_page.tsx";
import ActorsGallery from "./Actors_Gallery/actors_gallery.tsx";
import ActorPage from "./Actor_page/actor_page.tsx";

export const App = () => (
  <Admin layout={MyLayout} dataProvider={dataProvider} theme={theme}>
    <CustomRoutes>
      <Route path="/home_page" element={<HomePage />} />
      <Route path="/actors_gallery" element={<ActorsGallery />} />
      <Route path="/movie_page" element={<MoviePage/>} />
      <Route path="/actor_page" element={<ActorPage />} />
    </CustomRoutes>
  </Admin>
);
