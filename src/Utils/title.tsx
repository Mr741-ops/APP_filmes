export const TitleMovies = (resource: string, t: (key: string) => string) => {
    switch (resource) {
      case "popular":
        return t('PopularMovies');
      case "top_rated":
        return t('TopRatedMovies');
      case "now_playing":
        return t('NowPlayingMovies');
      case "upcoming":
        return t('UpcomingMovies');
      case "search":
        return t('SearchMovies');
    }
  };

  export const TitleSeries = (resource: string, t: (key: string) => string) => {
    switch (resource) {
      case "popular":
        return t('PopularSeries');
      case "top_rated":
        return t('TopRatedSeries');
      case "on_the_air":
        return t('CurrentlyAiringSeries');
      case "airing_today":
        return t('AiringToday');
    }
  };