import { http, HttpResponse } from 'msw';

const apiBase = import.meta.env.BASE_URL;

export const handlers = [
  http.get(`${apiBase}api/example`, () => {
    return HttpResponse.json([]);
  }),
];