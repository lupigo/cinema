type TNavConfig = {
  label: string;
  slug: string;
  layoutSegment?: string;
}[];

export const navConfig: TNavConfig = [
  {
    label: "Strona główna",
    slug: "/",
  },
  {
    label: "Filmy i seriale",
    slug: "/szukaj",
    layoutSegment: "filmy-i-seriale",
  },
  {
    label: "Blog",
    slug: "/blog",
  },
];
