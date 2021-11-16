export interface MovieData {
  id: string;
  title: string;
  releaseDate: number;
  imageUrl: string;
  description: string;
  rating: number;
  length: number;
}

export enum Genre {
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  HORROR = 'Horror',
  COMEDY = 'Comedy',
}

export enum SortCategory {
  RELEASE_DATE = 'release_date',
  TITLE = 'title',
  VOTE_COUNT = 'vote_count',
}

export interface Movie {
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: Date;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  id: number;
}

export interface SearchOptions {
  searchBy: string;
  search: string;
  sortBy: string;
}