export interface IPerson {
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  url: string;
}

export interface IResponse<T> {
  currentUrl: URL;
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export type TPeopleReponse = IResponse<Array<IPerson>>;
