import $api from '@http/index';
import { IProduct } from '@models/IProduct';

export class CatalogService {
  static async getProducts(): Promise<IProduct[]> {
    return $api.get('/products').then((res) => res.data);
  }
}
