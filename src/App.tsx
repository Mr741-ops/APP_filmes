import './i18n/i18n';

import { Admin, CustomRoutes } from 'react-admin';
import { dataProvider } from './Data/dataProvider';
import { Route } from 'react-router-dom';
import MyLayout from './MyLayout';
import HomePage from './Home_page/home_page';
import { theme } from './theme.tsx';
import MoviePage from './Movie_page/MovieDetailsPage.tsx';
import ActorsGallery from './Actors_Gallery/actors_gallery.tsx';
import ActorPage from './Actor_page/actor_page.tsx';
import TVPage from './Tv_Page/tv_page.tsx';
import TvSeriesPage from './Tv_Series_page/tv_series_page.tsx';
import MainPage from './Main_Page/Main.tsx';

export const App = () => (
  <Admin dashboard={MainPage} layout={MyLayout} dataProvider={dataProvider} theme={theme}>
    <CustomRoutes>
      <Route path="/home_page" element={<HomePage />} />
      <Route path="/actors_gallery" element={<ActorsGallery />} />
      <Route path="/TV_page" element={<TVPage />} />
      <Route path="/movie_page" element={<MoviePage />} />
      <Route path="/actor_page" element={<ActorPage />} />
      <Route path="/tv_series_page" element={<TvSeriesPage />} />
      <Route path="/Main" element={<MainPage />} />
    </CustomRoutes>
  </Admin>
);
