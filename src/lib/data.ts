export type Gallery = {
  id: string;
  type: string;
  name: string;
  venue?: string;
  location: string;
  cover: number;
  count: number;
};

export type Highlight = {
  src: string;
  horizontal: boolean;
};

export const WEDDING_COST = 4000;

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
export const weddings: Gallery[] = [
  {
    id: "veronicajoseph",
    type: "wedding",
    name: "Veronica & Joseph",
    venue: "Harborside Hotel",
    location: "Bar Harbor, ME",
    cover: 13,
    count: 67,
  },
  {
    id: "orbreybrett",
    type: "wedding",
    name: "Orbrey & Brett",
    venue: "Shepherd's Run",
    location: "South Kingston, RI",
    cover: 4,
    count: 37,
  },
  {
    id: "valeriejoseph",
    type: "wedding",
    name: "Valerie & Joseph",
    venue: "The Barn At Gibbet Hill",
    location: "Groton, MA",
    cover: 17,
    count: 39,
  },
  {
    id: "christiadam",
    type: "wedding",
    name: "Christi & Adam",
    venue: "Oceanview Of Nahant",
    location: "Nahant, MA",
    cover: 23,
    count: 52,
  },
  {
    id: "jessicageorge",
    type: "wedding",
    name: "Jessica & George",
    venue: "Granite Links",
    location: "Quincy, MA",
    cover: 18,
    count: 35,
  },
  {
    id: "marissamichael",
    type: "wedding",
    name: "Marissa & Michael",
    venue: "Granite Links",
    location: "Quincy, MA",
    cover: 10,
    count: 30,
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
    name: "Alina & Brandon",
    venue: "Borderland State Park",
    location: "North Easton, MA",
    cover: 15,
    count: 30,
  },
  {
    id: "roxanakonstantin",
    type: "couples",
    name: "Roxana & Konstantin",
    venue: "Raffles Hotel",
    location: "Boston, MA",
    cover: 8,
    count: 23,
  },
];
