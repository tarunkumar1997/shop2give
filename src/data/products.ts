export type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  campaignId?: string;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Gold Bracelet – Sun Charm (Psalm 118:24)',
    price: 50,
    imageUrl: 'https://img.kwcdn.com/product/open/81c21808a1b046e4b5d4acca86e6a60e-goods.jpeg?imageView2/2/w/1300/q/90/format/webp',
    campaignId: '2',
  },
  {
    id: '2',
    title: '"God is Within Her" Wall Print',
    price: 20,
    imageUrl: 'https://i.etsystatic.com/35438380/r/il/98e742/5552974797/il_1588xN.5552974797_rqhh.jpg',
    campaignId: '3',
  },
  {
    id: '3',
    title: '"Faith Over Fear" Minimalist Print',
    price: 30,
    imageUrl: 'https://i.etsystatic.com/36082814/r/il/cbe563/6028707336/il_1588xN.6028707336_6tmx.jpg',
    campaignId: '1',
  },
  {
    id: '4',
    title: 'Cross Bracelet',
    price: 45,
    imageUrl: 'https://reginajewelry.co/cdn/shop/files/888C766A-8FF2-4645-97A0-9C649530C71C.jpg?v=1716458832&width=1100',
    campaignId: '4',
  },
];