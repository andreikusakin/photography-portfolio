export type NavElement = {
  name: string;
  href?: string;
  subElements?: NavElement[];
};

export const navElements: NavElement[] = [
  { name: "Portfolio", subElements: [
    { name: "Wedding",
      href: "/wedding",
    },
  { name: "Portrait",
    href: "/portrait",
  }
]},
  { name: "About", href: "/about" },
  { name: "Information", 
    subElements: [
      { name: "FAQ",
        href: "/faq",
      },
      { name: "Pricing",
        href: "/pricing",
      },
    ]
   },
  { name: "Contact", href: "/contact" },
];