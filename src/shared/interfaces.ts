export interface MovieData {
  id: string;
  title: string;
  releaseDate: number;
  imageUrl: string;
  description: string;
}

export enum Genre {
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  HORROR = 'Horror',
  COMEDY = 'Comedy',
}