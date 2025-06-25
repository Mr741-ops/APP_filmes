export const TitleMovies = (resource: string, t: (key: string) => string) => {
    switch (resource) {
      case "popular":
        return t('movies.Popular');
      case "top_rated":
        return t('movies.TopRated');
      case "now_playing":
        return t('movies.NowPlaying');
      case "upcoming":
        return t('movies.Upcoming');
    }
  };

  export const TitleSeries = (resource: string, t: (key: string) => string) => {
    switch (resource) {
      case "popular":
        return t('series.Popular');
      case "top_rated":
        return t('series.TopRated');
      case "on_the_air":
        return t('series.OnTheAir');
      case "airing_today":
        return t('series.AiringToday');
    }
  };