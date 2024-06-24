import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products = [
    {
      _id: 1,
      name: "Nike Dri-FIT",
      slug: "nike-dri-fit",
      price: 30,
      category: "Men",
      imageUrl: "/images/nike-dri-fit.png",
    },
    {
      _id: 2,
      name: "Adidas Running Shoes",
      slug: "adidas-running-shoes",
      price: 50,
      category: "Men",
      imageUrl: "/images/adidas-running-shoes.avif",
    },
    {
      _id: 3,
      name: "Puma Sports Jacket",
      slug: "puma-sports-jacket",
      price: 70,
      category: "Women",
      imageUrl: "/images/puma-sports-jacket.webp",
    },
    {
      _id: 4,
      name: "Under Armour T-Shirt",
      slug: "under-armour-t-shirt",
      price: 25,
      category: "Women",
      imageUrl: "/images/under-armour-t-shirt.webp",
    },
    {
      _id: 5,
      name: "Reebok Training Shorts",
      slug: "reebok-training-shorts",
      price: 20,
      category: "Men",
      imageUrl: "/images/reebok-training-shorts.webp",
    },
    {
      _id: 6,
      name: "Asics Gel Sneakers",
      slug: "asics-gel-sneakers",
      price: 60,
      category: "Women",
      imageUrl: "/images/asics-gel-sneakers.webp",
    },
    {
      _id: 7,
      name: "New Balance Hoodie",
      slug: "new-balance-hoodie",
      price: 40,
      category: "Women",
      imageUrl: "/images/new-balance-hoodie.webp",
    },
    {
      _id: 8,
      name: "Columbia Winter Jacket",
      slug: "columbia-winter-jacket",
      price: 100,
      category: "Women",
      imageUrl: "/images/columbia-winter-jacket.webp",
    },
    {
      _id: 9,
      name: "Patagonia Fleece",
      slug: "patagonia-fleece",
      price: 80,
      category: "Men",
      imageUrl: "/images/patagonia-fleece.webp",
    },
    {
      _id: 10,
      name: "The North Face Trousers",
      slug: "the-north-face-trousers",
      price: 90,
      category: "Women",
      imageUrl: "/images/the-north-face-trousers.webp",
    },
    {
      _id: 11,
      name: "Mizuno Volleyball Shoes",
      slug: "mizuno-volleyball-shoes",
      price: 55,
      category: "Men",
      imageUrl: "/images/mizuno-volleyball-shoes.webp",
    },
    {
      _id: 12,
      name: "Brooks Running Cap",
      slug: "brooks-running-cap",
      price: 15,
      category: "Unisex",
      imageUrl: "/images/brooks-running-cap.webp",
    },
  ];

  getProducts() {
    return this.products;
  }
}
