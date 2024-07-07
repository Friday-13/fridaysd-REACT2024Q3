const baseUrl = new URL('https://swapi.dev/api/');

function constructRequest(endpoint: string, query?: string) {
  const url = new URL(baseUrl);
  url.pathname += endpoint;
  if (query) {
    url.searchParams.set('search', query);
  }
  return url;
}

export interface person {
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
}

export async function getPeople(search: string) {
  const request = constructRequest('people/', search);
  const answer = await fetch(request.href);
  const data = await answer.json();
  return data.results as Array<person>;
}
