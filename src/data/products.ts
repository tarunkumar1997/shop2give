import { v4 as uuidv4 } from 'uuid';

export type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  campaignId?: string;
  badge?: 'SALE' | 'NEW' | 'LIMITED';
  quantity?: number;
};

export const products: Product[] = [
  {
    id: uuidv4(),
    title: 'Gouden Armband • Zon',
    price: 50,
    imageUrl: 'https://img.kwcdn.com/product/open/81c21808a1b046e4b5d4acca86e6a60e-goods.jpeg?imageView2/2/w/1300/q/90/format/webp',
    badge: 'NEW',
  },
  {
    id: uuidv4(),
    title: 'Fruit of the SPIRIT',
    price: 35,
    imageUrl: 'https://i.etsystatic.com/35438380/r/il/98e742/5552974797/il_1588xN.5552974797_rqhh.jpg',
  },
  {
    id: uuidv4(),
    title: 'Pray over it',
    price: 15,
    imageUrl: 'https://i.etsystatic.com/36082814/r/il/cbe563/6028707336/il_1588xN.6028707336_6tmx.jpg',
    badge: 'SALE',
  },
  {
    id: uuidv4(),
    title: 'JESUS Sweatshirt',
    price: 45,
    imageUrl: 'https://reginajewelry.co/cdn/shop/files/888C766A-8FF2-4645-97A0-9C649530C71C.jpg?v=1716458832&width=1100',
    badge: 'LIMITED',
  },
];