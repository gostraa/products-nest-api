"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            {
                _id: 1,
                name: 'Nike Dri-FIT',
                slug: 'nike-dri-fit',
                price: 30,
                category: 'Men',
                imageUrl: '/images/nike-dri-fit.png',
            },
            {
                _id: 2,
                name: 'Adidas Running Shoes',
                slug: 'adidas-running-shoes',
                price: 50,
                category: 'Men',
            },
            {
                _id: 3,
                name: 'Puma Sports Jacket',
                slug: 'puma-sports-jacket',
                price: 70,
                category: 'Women',
            },
            {
                _id: 4,
                name: 'Under Armour T-Shirt',
                slug: 'under-armour-t-shirt',
                price: 25,
                category: 'Women',
            },
            {
                _id: 5,
                name: 'Reebok Training Shorts',
                slug: 'reebok-training-shorts',
                price: 20,
                category: 'Men',
            },
            {
                _id: 6,
                name: 'Asics Gel Sneakers',
                slug: 'asics-gel-sneakers',
                price: 60,
                category: 'Women',
            },
            {
                _id: 7,
                name: 'New Balance Hoodie',
                slug: 'new-balance-hoodie',
                price: 40,
                category: 'Women',
            },
            {
                _id: 8,
                name: 'Columbia Winter Jacket',
                slug: 'columbia-winter-jacket',
                price: 100,
                category: 'Women',
            },
            {
                _id: 9,
                name: 'Patagonia Fleece',
                slug: 'patagonia-fleece',
                price: 80,
                category: 'Men',
            },
            {
                _id: 10,
                name: 'The North Face Trousers',
                slug: 'the-north-face-trousers',
                price: 90,
                category: 'Women',
            },
            {
                _id: 11,
                name: 'Mizuno Volleyball Shoes',
                slug: 'mizuno-volleyball-shoes',
                price: 55,
                category: 'Men',
            },
            {
                _id: 12,
                name: 'Brooks Running Cap',
                slug: 'brooks-running-cap',
                price: 15,
                category: 'Unisex',
            },
        ];
    }
    getProducts() {
        return this.products;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map