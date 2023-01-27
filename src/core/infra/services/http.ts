const HOST = String(process.env.HOST);

interface MakeHttpParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  baseURL: string;
  body?: BodyInit;
}

type HttpParams = Omit<MakeHttpParams, 'baseURL'>;

function formatBaseURL(baseURL: string) {
  return baseURL.endsWith('/') ? baseURL : baseURL + '/';
}

export async function makeHttp<T>({
  url,
  body,
  baseURL,
  method = 'GET',
}: MakeHttpParams) {
  const baseURLFormatted = formatBaseURL(baseURL);

  const response = await fetch(baseURLFormatted + url, {
    method,
    body,
  });

  const data: T = await response.json();

  return {
    ...response,
    data,
  };
}

export async function http(params: HttpParams) {
  return makeHttp({ baseURL: HOST, ...params });
}
