import { v4 as uuidv4 } from 'uuid';
import { generateSlug } from '../lib/utils';

export type Campaign = {
  id: string;
  slug: string;
  title: string;
  location: string;
  amountRaised: number;
  goal: number;
  imageUrl: string;
  description: string;
};

export const campaigns: Campaign[] = [
  {
    id: uuidv4(),
    slug: generateSlug('With Love for the Gittner Family'),
    title: 'With Love for the Gittner Family',
    location: 'United States',
    amountRaised: 43565,
    goal: 10000,
    imageUrl: 'https://images.gofundme.com/XdKoSBtn3ImFO82B7UsLAiy_qvQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/91435941_1748466223304595_r.png',
    description: `UPDATE: Yesterday (5/28) at 5:00pm, Caty peacefully passed away surrounded by her family and friends. In true Caty fashion, always giving and enriching other's lives, she has chosen to donate to the Gift of Life. Her selfless gift will save the lives of at least 10 people and impact up to 100 others by donating her organs. Funeral arrangements will be shared at a later time.

Dear Gittner Friends, Family, Neighbors, and Loved Ones,

The Gittner family is facing a medical emergency that has resulted in Caty being hospitalized. Over the past few days, there has been an outpouring of kindness and heartfelt inquiries from staff and families asking how they can support the Gittner family during this incredibly difficult time. Mike and Caty are beloved members of our Rochester community, and their impact on students, colleagues, and families is deeply felt. In response to those who've reached out, we are sharing the following ways to come together in support, honor, and care.

In response to those who have reached out, we have set up a GoFundMe page to collect monetary contributions that will go directly toward meals, pet care, and any other needs for the Gittner family.

Thank you for showing up for one another and being part of a community that cares so deeply.

With Heartfelt Gratitude,
Gittner Friends, Family, Neighbors, and Loved Ones`,
  },
  {
    id: uuidv4(),
    slug: generateSlug('Lough Swilly Tragedy'),
    title: 'Lough Swilly Tragedy',
    location: 'Buncrana, Ireland',
    amountRaised: 38420,
    goal: 40000,
    imageUrl: 'https://images.gofundme.com/adNYxdB_tQN0LrAYIeoPgf3AjXE=/720x405/https://d2g8igdw686xgo.cloudfront.net/91011737_1747073563241105_r.png',
    description: 'Support two Buncrana families after a tragic loss. 100% of donations go directly to them through Insight Inishowen.',
  },
  {
    id: uuidv4(),
    slug: generateSlug('Royal Mission School – Sifra Bachtiar'),
    title: 'Royal Mission School – Sifra Bachtiar',
    location: 'Netherlands',
    amountRaised: 4500,
    goal: 7000,
    imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '17-year-old Sifra seeks support to attend Bible School. Help her grow in faith and purpose.',
  },
  {
    id: uuidv4(),
    slug: generateSlug('Help Gioia (4) Fight Brain Tumor'),
    title: 'Help Gioia (4) Fight Brain Tumor',
    location: 'Groningen, Netherlands',
    amountRaised: 14138,
    goal: 50000,
    imageUrl: 'https://images.gofundme.com/FxLZnLlAQX256SxoNuRwl1rCouM=/720x405/https://d2g8igdw686xgo.cloudfront.net/91407201_1748463353680011_r.png',
    description: 'Gioia is battling a rare brain tumor. Donations fund life-extending treatment and family support in Spain.',
  },
  {
    id: uuidv4(),
    slug: generateSlug('Vascular Surgery for Anne'),
    title: 'Vascular Surgery for Anne',
    location: 'Meijel, Netherlands',
    amountRaised: 56961,
    goal: 60000,
    imageUrl: 'https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Anne needs urgent vascular surgery. Your donations will help cover medical expenses and recovery costs.',
  },
  {
    id: uuidv4(),
    slug: generateSlug('Support Fatma in Her Cancer Battle'),
    title: 'Support Fatma in Her Cancer Battle',
    location: 'Rotterdam, Netherlands',
    amountRaised: 58274,
    goal: 70000,
    imageUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Fatma is fighting cancer and needs your support for treatment and family care during this difficult time.',
  },
  {
    id: uuidv4(),
    slug: generateSlug('Help Lenn Get a Wheelchair Bus'),
    title: 'Help Lenn Get a Wheelchair Bus',
    location: 'Beegden, Netherlands',
    amountRaised: 7714,
    goal: 15000,
    imageUrl: 'https://images.pexels.com/photos/4064841/pexels-photo-4064841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Lenn needs a specialized wheelchair-accessible bus for mobility. Your support will help improve his quality of life.',
  },
];