const baseUrl = new URL('https://swapi.dev/api/');

type TSearchParam = {
  name: string;
  value: string;
};

function constructRequest(endpoint: string, params?: Array<TSearchParam>) {
  const url = new URL(baseUrl);
  url.pathname += endpoint;
  if (params) {
    params.forEach((param) => {
      url.searchParams.set(param.name, param.value);
    });
  }
  return url;
}

export interface IPerson {
  id: string;
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
}

export interface IResponse<T> {
  currentUrl: URL;
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export async function getPeople(search?: string, pageNumber?: number) {
  const params = [];
  if (search) {
    const searchParam: TSearchParam = {
      name: 'search',
      value: search,
    };
    params.push(searchParam);
  }

  if (pageNumber !== undefined) {
    const pageParam: TSearchParam = {
      name: 'page',
      value: `${pageNumber}`,
    };
    params.push(pageParam);
  }
  const request = constructRequest('people/', params);
  const answer = await fetch(request.href);
  const data = await answer.json();
  const response: IResponse<Array<IPerson>> = {
    currentUrl: request,
    results: data.results as Array<IPerson>,
    next: data.next,
    previous: data.previous,
    count: data.count,
  };
  return response;
}

export async function getPerson(personId: number) {
  const request = constructRequest(`people/${personId}`);
  const answer = await fetch(request.href);
  const data = await answer.json();
  return data;
}
