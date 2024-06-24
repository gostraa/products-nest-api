export declare class ProductsService {
    private products;
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
