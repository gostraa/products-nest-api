import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): ({
        _id: number;
        name: string;
        slug: string;
        price: number;
        category: string;
        imageUrl: string;
    } | {
        _id: number;
        name: string;
        slug: string;
        price: number;
        category: string;
        imageUrl?: undefined;
    })[];
}
