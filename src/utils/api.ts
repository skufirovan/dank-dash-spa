import { TProduct } from './types';

const DDURL = process.env.URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export type TServerResponseStatus = { success: boolean };

type TServerResponse<T> = TServerResponseStatus & T;

type TProductsResponse = TServerResponse<{
  data: TProduct[];
}>;

export const getProductsApi = () =>
  fetch(`${DDURL}/products`)
    .then((res) => checkResponse<TProductsResponse>(res))
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
