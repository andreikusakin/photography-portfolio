export type Gallery = {
  id: string;
  type: string;
  name: string;
  venue?: string;
  location: string;
  cover: number;
  count: number;
};

export type highlight = {
  src: string;
  horizontal: boolean;
};

export const weddingHighlights: highlight[] = [
  {
    src: "/wedding/highlights/1.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/highlights/2.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/highlights/3.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/highlights/4.jpg",
    horizontal: true,
  },
  {
    src: "/wedding/highlights/5.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/highlights/6.jpg",
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

export const portraitHighlights: highlight[] = [
  {
    src: "/wedding/highlights/1.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/highlights/2.jpg",
    horizontal: false,
  },
  {
    src: "/wedding/highlights/3.jpg",
    horizontal: true,
  },
];

export const portraits: Gallery[] = [
  {
    id: "alinabrandon",
    type: "portrait",
    name: "Alina & Brandon",
    venue: "Borderland State Park",
    location: "North Easton, MA",
    cover: 15,
    count: 30,
  },
  {
    id: "roxanakonstantin",
    type: "portrait",
    name: "Roxana & Konstantin",
    venue: "Raffles Hotel",
    location: "Boston, MA",
    cover: 8,
    count: 23,
  },
];
