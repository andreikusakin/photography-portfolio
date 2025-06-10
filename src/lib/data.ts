export type Gallery = {
  id: string;
  type: string;
  name: string;
  venue?: string;
  location: string;
  cover: string;
  hero: string;
  images?: string[];
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
    src: "/weddings/highlights/01.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/02.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/03.jpg",
    horizontal: true,
  },
  {
    src: "/weddings/highlights/04.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/05.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/06.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/07.jpg",
    horizontal: true,
  },
  {
    src: "/weddings/highlights/08.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/09.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/010.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/011.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/012.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/013.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/014.jpg",
    horizontal: false,
  } ,
  {
    src: "/weddings/highlights/015.jpg",
    horizontal: true,
  },
  {
    src: "/weddings/highlights/016.jpg",
    horizontal: false,
  },
  {
    src: "/weddings/highlights/017.jpg",
    horizontal: true,
  },
  {
    src: "/weddings/highlights/018.jpg",
    horizontal: false,
  } ,
  {
    src: "/weddings/highlights/019.jpg",
    horizontal: true,
  },
  {
    src: "/weddings/highlights/020.jpg",
    horizontal: false,
  },

  
];

// export const families: Gallery[] = [ 
//   {
//     id: "hancharou",
//     type: "family",
//     name: "Hancharou Family",
//     venue: "Four Seasons Hotel",
//     location: "Boston, MA",
//     cover: 14,
//     hero: 12,
//   },
// ]

// export const familyHighlights: Highlight[] = [
//   {
//     src: "/family/hancharou/12.jpg",
//     horizontal: true,
//   },
//   {
//     src: "/family/hancharou/21.jpg",
//     horizontal: true,
//   },
//   {
//     src: "/family/hancharou/25.jpg",
//     horizontal: false,
//   },
//   {
//     src: "/family/hancharou/29.jpg",
//     horizontal: true,
//   },
// ]

export const weddings: Gallery[] = [
  {
    id: "maddy-alex",
    type: "wedding",
    name: "Maddy + Alex",
    venue: "Smith Farm Gardens",
    location: "East Haddam, CT",
    cover: "/weddings/maddy-alex/000048.jpg",
    hero: "/weddings/maddy-alex/000086.jpg",
  },
  {
    id: "alex-adam",
    type: "wedding",
    name: "Alexandra + Adam",
    venue: "Glen Island Harbour Club",
    location: "New Rochelle, NY",
    cover: "/weddings/alex-adam/000045.jpg",
    hero: "/weddings/alex-adam/000047.jpg",
  },

  {
    id: "veronica-joseph",
    type: "wedding",
    name: "Veronica + Joseph",
    venue: "Harborside Hotel",
    location: "Bar Harbor, ME",
    cover: '/weddings/veronica-joseph/000013.jpg',
    hero: '/weddings/veronica-joseph/000024.jpg',
  },
  {
    id: "alyssa-jonathan",
    type: "wedding",
    name: "Alyssa + Jonathan",
    venue: "Boston Public Library",
    location: "Boston, MA",
    cover: '/weddings/alyssa-jonathan/000078.jpg',
    hero: '/weddings/alyssa-jonathan/000058.jpg',
  },
  {
    id: "amy-charlie",
    type: "wedding",
    name: "Amy + Charlie",
    venue: "The Evermore at Peirce Farm Estate",
    location: "Topsfield, MA",
    cover: '/weddings/amy-charlie/000099.jpg',
    hero: '/weddings/amy-charlie/000058.jpg',
  },
  {
    id: "orbrey-brett",
    type: "wedding",
    name: "Orbrey + Brett",
    venue: "Shepherd's Run",
    location: "South Kingston, RI",
    cover: '/weddings/orbrey-brett/000005.jpg',
    hero: '/weddings/orbrey-brett/000024.jpg',
  },
  {
    id: "valerie-joseph",
    type: "wedding",
    name: "Valerie + Joseph",
    venue: "The Barn At Gibbet Hill",
    location: "Groton, MA",
    cover: '/weddings/valerie-joseph/000017.jpg',
    hero: '/weddings/valerie-joseph/000013.jpg'
  },
  {
    id: "christi-adam",
    type: "wedding",
    name: "Christi + Adam",
    venue: "Oceanview Of Nahant",
    location: "Nahant, MA",
    cover: '/weddings/christi-adam/000023.jpg',
    hero: '/weddings/christi-adam/000018.jpg'
  },
];

export const couplesHighlights: Highlight[] = [
  {
    src: "/couples/alina-brandon/000020.jpg",
    horizontal: true,
  },
  {
    src: "/couples/alina-brandon/000023.jpg",
    horizontal: false,
  },
  {
    src: "/couples/alina-brandon/000030.jpg",
    horizontal: true,
  },
  { src: "/couples/roxana-konstantin/000008.jpg", horizontal: false },
  { src: "/couples/roxana-konstantin/000018.jpg", horizontal: true },
];

export const couples: Gallery[] = [
  {
    id: "alina-brandon",
    type: "couples",
    name: "Alina + Brandon",
    venue: "Borderland State Park",
    location: "North Easton, MA",
    cover: '/couples/alina-brandon/000015.jpg',
    hero: '/couples/alina-brandon/000030.jpg',
  },
  {
    id: "roxana-konstantin",
    type: "couples",
    name: "Roxana + Konstantin",
    venue: "Raffles Hotel",
    location: "Boston, MA",
    cover: '/couples/roxana-konstantin/000008.jpg',
    hero: '/couples/roxana-konstantin/000018.jpg',
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
  