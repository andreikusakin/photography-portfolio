export type Gallery = {
  id: string;
  type: string;
  name: string;
  venue?: string;
  location: string;
  cover: number;
  hero: number;
};

export type Highlight = {
  src: string;
  horizontal: boolean;
};

export const ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE = 4000;

export const STARTER_WEDDING_PACKAGE_PRICE = 2500;

export const HOUR_RATE = 350;

export const weddingHighlights: Highlight[] = [
  {
    src: "/wedding/veronicajoseph/17.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/veronicajoseph/15.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/veronicajoseph/24.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/veronicajoseph/52.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/orbreybrett/23.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/orbreybrett/8.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/valeriejoseph/5.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/valeriejoseph/13.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/valeriejoseph/15.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/christiadam/18.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/christiadam/22.jpg",
    horizontal: false,
  },

  {
    src: "/wedding/christiadam/46.jpg",
    horizontal: false,
  },

  {
    src: "/wedding/jessicageorge/2.jpg",
    horizontal: false,
  },

  {
    src: "/wedding/jessicageorge/18.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/jessicageorge/20.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/marissamichael/10.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/marissamichael/25.jpg",
    horizontal: false,
  },
];

export const families: Gallery[] = [ 
  {
    id: "hancharou",
    type: "family",
    name: "Hancharou Family",
    venue: "Four Seasons Hotel",
    location: "Boston, MA",
    cover: 14,
    hero: 12,
  },
]

export const familyHighlights: Highlight[] = [
  {
    src: "/family/hancharou/12.jpg",
    horizontal: true,
  },
  {
    src: "/family/hancharou/21.jpg",
    horizontal: true,
  },
  {
    src: "/family/hancharou/25.jpg",
    horizontal: false,
  },
  {
    src: "/family/hancharou/29.jpg",
    horizontal: true,
  },
]

export const weddings: Gallery[] = [
  {
    id: "alexandradam",
    type: "wedding",
    name: "Alexandra + Adam",
    venue: "Glen Island Harbour Club",
    location: "New Rochelle, NY",
    cover: 41,
    hero: 42,
  },
  {
    id: "veronicajoseph",
    type: "wedding",
    name: "Veronica + Joseph",
    venue: "Harborside Hotel",
    location: "Bar Harbor, ME",
    cover: 13,
    hero: 24,
  },
  {
    id: "orbreybrett",
    type: "wedding",
    name: "Orbrey + Brett",
    venue: "Shepherd's Run",
    location: "South Kingston, RI",
    cover: 4,
    hero: 23,
  },
  {
    id: "valeriejoseph",
    type: "wedding",
    name: "Valerie + Joseph",
    venue: "The Barn At Gibbet Hill",
    location: "Groton, MA",
    cover: 17,
    hero: 7
  },
  {
    id: "christiadam",
    type: "wedding",
    name: "Christi + Adam",
    venue: "Oceanview Of Nahant",
    location: "Nahant, MA",
    cover: 23,
    hero: 18
  },
  {
    id: "jessicageorge",
    type: "wedding",
    name: "Jessica + George",
    venue: "Granite Links",
    location: "Quincy, MA",
    cover: 18,
    hero: 10
  },
  {
    id: "marissamichael",
    type: "wedding",
    name: "Marissa + Michael",
    venue: "Granite Links",
    location: "Quincy, MA",
    cover: 10,
    hero: 9,
  },
];

export const couplesHighlights: Highlight[] = [
  {
    src: "/couples/alinabrandon/20.jpg",
    horizontal: true,
  },
  {
    src: "/couples/alinabrandon/23.jpg",
    horizontal: false,
  },
  {
    src: "/couples/alinabrandon/30.jpg",
    horizontal: true,
  },
  { src: "/couples/roxanakonstantin/8.jpg", horizontal: false },
  { src: "/couples/roxanakonstantin/18.jpg", horizontal: true },
];

export const couples: Gallery[] = [
  {
    id: "alinabrandon",
    type: "couples",
    name: "Alina + Brandon",
    venue: "Borderland State Park",
    location: "North Easton, MA",
    cover: 15,
    hero: 30,
  },
  {
    id: "roxanakonstantin",
    type: "couples",
    name: "Roxana + Konstantin",
    venue: "Raffles Hotel",
    location: "Boston, MA",
    cover: 8,
    hero: 17,
  },
];


export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/kusakinphoto/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@kusakinphoto",
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/kusakinphoto/",
  },
];
  