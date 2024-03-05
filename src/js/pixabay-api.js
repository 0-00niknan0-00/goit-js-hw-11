const KEY = '42717208-a054428a9fe92ed44706731cd';
const BASE_URL = 'https://pixabay.com/api/';

export function pixabayApi(query) {
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}`;
  return fetch(LINK).then(response => {
    if (!response.ok) {
      throw new Error('IMG error');
    }
    return response.json();
  });
}
