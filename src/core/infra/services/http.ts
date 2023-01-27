interface HttpParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: BodyInit;
}

export async function http<T>({ url, body, method = 'GET' }: HttpParams) {
  const response = await fetch(url, {
    method,
    body,
  });

  const data: T = await response.json();

  return {
    ...response,
    data,
  };
}
