import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  getSingleProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }
}
