export interface BodyProps {
  resource?: string;
  page: number;
  data?: Movie[] | null;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}
