import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Mobile',
      price: 2000,
    },
    {
      id: 2,
      name: 'Laptop',
      price: 6000,
    },
    {
      id: 3,
      name: 'KOna',
      price: 200,
    },
  ];

  @Get('product')
  getAllProduct() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
