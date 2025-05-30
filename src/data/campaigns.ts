export type Campaign = {
  id: string;
  title: string;
  location: string;
  amountRaised: number;
  goal: number;
  imageUrl: string;
  description: string;
};

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Lough Swilly Tragedy',
    location: 'Buncrana, Ireland',
    amountRaised: 38420,
    goal: 40000,
    imageUrl: 'https://images.gofundme.com/adNYxdB_tQN0LrAYIeoPgf3AjXE=/720x405/https://d2g8igdw686xgo.cloudfront.net/91011737_1747073563241105_r.png',
    description: 'Support two Buncrana families after a tragic loss. 100% of donations go directly to them through Insight Inishowen.',
  },
  {
    id: '2',
    title: 'Royal Mission School – Sifra Bachtiar',
    location: 'Netherlands',
    amountRaised: 4500,
    goal: 7000,
    imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '17-year-old Sifra seeks support to attend Bible School. Help her grow in faith and purpose.',
  },
  {
    id: '3',
    title: 'Help Gioia (4) Fight Brain Tumor',
    location: 'Groningen, Netherlands',
    amountRaised: 14138,
    goal: 50000,
    imageUrl: 'https://images.gofundme.com/FxLZnLlAQX256SxoNuRwl1rCouM=/720x405/https://d2g8igdw686xgo.cloudfront.net/91407201_1748463353680011_r.png',
    description: 'Gioia is battling a rare brain tumor. Donations fund life-extending treatment and family support in Spain.',
  },
  {
    id: '4',
    title: 'Vascular Surgery for Anne',
    location: 'Meijel, Netherlands',
    amountRaised: 56961,
    goal: 60000,
    imageUrl: 'https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Anne needs urgent vascular surgery. Your donations will help cover medical expenses and recovery costs.',
  },
  {
    id: '5',
    title: 'Support Fatma in Her Cancer Battle',
    location: 'Rotterdam, Netherlands',
    amountRaised: 58274,
    goal: 70000,
    imageUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Fatma is fighting cancer and needs your support for treatment and family care during this difficult time.',
  },
  {
    id: '6',
    title: 'Help Lenn Get a Wheelchair Bus',
    location: 'Beegden, Netherlands',
    amountRaised: 7714,
    goal: 15000,
    imageUrl: 'https://images.pexels.com/photos/4064841/pexels-photo-4064841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Lenn needs a specialized wheelchair-accessible bus for mobility. Your support will help improve his quality of life.',
  },
];