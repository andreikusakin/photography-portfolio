export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface Gallery {
  id: string;
  type: "wedding" | "intimateWedding" | "couple";
  name: string;
  venue: string;
  location: string;
  cover?: GalleryImage;
  hero?: GalleryImage;
  images?: GalleryImage[];
}
export type Highlight = {
  src: string;
  horizontal: boolean;
};

export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
}

// export interface Gallery {
//   id: string;
//   type: "wedding" | "intimateWedding" | "couple";
//   name: string;
//   venue: string;
//   location: string;
//   images?: GalleryImage[];
// }

export const ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE = 4000;

export const HOUR_RATE = 400;

export const intimateWeddings: Gallery[] = [
  {
    id: "lily-andrew",
    type: "wedding",
    name: "Lily + Andrew",
    venue: "Elopement",
    location: "Salem, MA",
  },
  {
    id: "seanna-morgan",
    type: "wedding",
    name: "Seanna + Morgan",
    venue: "Sinai Temple",
    location: "Springfield, MA",
  },
   {
    id: "thea-fernando",
    type: "wedding",
    name: "Thea + Fernando",
    venue: "Boston City Hall",
    location: "Boston, MA",
  },
  {
    id: "bridget-eric",
    type: "wedding",
    name: "Bridget + Eric",
    venue: "Backyard Wedding",
    location: "Rhode Island",
  },
  {
    id: "alyssa-jonathan",
    type: "wedding",
    name: "Alyssa + Jonathan",
    venue: "Boston Public Library",
    location: "Boston, MA",
  },
];

export const weddings: Gallery[] = [
  {
    id: "michaela-david",
    type: "wedding",
    name: "Michaela + David",
    venue: "The Bradley Estate",
    location: "Canton, MA",
  },
  {
    id: "maddy-alex",
    type: "wedding",
    name: "Maddy + Alex",
    venue: "Smith Farm Gardens",
    location: "East Haddam, CT",
  },
  {
    id: "alex-adam",
    type: "wedding",
    name: "Alexandra + Adam",
    venue: "Glen Island Harbour Club",
    location: "New Rochelle, NY",
  },
  {
    id: "erica-mike",
    type: "wedding",
    name: "Erica + Mike",
    venue: "White Cliffs Country Club",
    location: "Plymouth, MA",
  },
  {
    id: "amy-charlie",
    type: "wedding",
    name: "Amy + Charlie",
    venue: "The Evermore at Peirce Farm Estate",
    location: "Topsfield, MA",
  },
  {
    id: "erin-kyle",
    type: "wedding",
    name: "Erin + Kyle",
    venue: "Waverly Oaks Golf Club",
    location: "Plymouth, MA",
  },
  {
    id: "kayla-jackson",
    type: "wedding",
    name: "Kayla + Jackson",
    venue: "The Villa",
    location: "East Bridgewater, MA",
  },
  {
    id: "veronica-joseph",
    type: "wedding",
    name: "Veronica + Joseph",
    venue: "Harborside Hotel",
    location: "Bar Harbor, ME",
  },

  // {
  //   id: "orbrey-brett",
  //   type: "wedding",
  //   name: "Orbrey + Brett",
  //   venue: "Shepherd's Run",
  //   location: "South Kingston, RI",
  // },
  {
    id: "valerie-joseph",
    type: "wedding",
    name: "Valerie + Joseph",
    venue: "The Barn At Gibbet Hill",
    location: "Groton, MA",
  },
  // {
  //   id: "christi-adam",
  //   type: "wedding",
  //   name: "Christi + Adam",
  //   venue: "Oceanview Of Nahant",
  //   location: "Nahant, MA",
  // },
];


export const couples: Gallery[] = [
      {
    id: "gianna-jacob",
    type: "couple",
    name: "Gianna + Jacob",
    venue: "Beacon Hill",
    location: "Boston, MA",
  },
    {
    id: "angela-sean",
    type: "couple",
    name: "Angela + Sean",
    venue: "Torbert MacDonald State Park",
    location: "Medford, MA",
  },
      {
    id: "jacqueline-evan",
    type: "couple",
    name: "Jacqueline + Evan",
    venue: "South End & Boston Colleg",
    location: "Boston, MA",
  },
  {
    id: "alina-brandon",
    type: "couple",
    name: "Alina + Brandon",
    venue: "Borderland State Park",
    location: "North Easton, MA",
  },
  {
    id: "roxana-konstantin",
    type: "couple",
    name: "Roxana + Konstantin",
    venue: "Raffles Hotel",
    location: "Boston, MA",
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

export const travel = [
  "/travel/000001.jpg",
  "/travel/000002.jpg",
  "/travel/000003.jpg",
  "/travel/000004.jpg",
  "/travel/000005.jpg",
  "/travel/000006.jpg",
  "/travel/000007.jpg",
  "/travel/000008.jpg",
  "/travel/000009.jpg",
  "/travel/000010.jpg",
  "/travel/000011.jpg",
  "/travel/000012.jpg",
  "/travel/000013.jpg",
  "/travel/000014.jpg",
  "/travel/000015.jpg",
  "/travel/000016.jpg",
  "/travel/000017.jpg",
  "/travel/000018.jpg",
  "/travel/000019.jpg",
  "/travel/000020.jpg",
  "/travel/000021.jpg",
  "/travel/000022.jpg",
  "/travel/000023.jpg",
  "/travel/000024.jpg",
  "/travel/000025.jpg",
];
