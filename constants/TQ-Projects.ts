export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  price: string;
  category: string;
  status: "Available" | "Coming Soon" | "Sold Out";
};

export const projects: Record<string, Project> = {
  "truqorun-ecommerce": {
    slug: "truqorun-ecommerce",
    name: "Truqorun E-commerce",
    description:
      "A full-stack e-commerce platform for buying and selling products.",
    longDescription:
      "Truqorun E-commerce is a production-ready full-stack marketplace built with Next.js, TypeScript, Tailwind CSS, and Firebase. It includes product listings, cart management, authentication, and a vendor dashboard — all optimized for performance and scalability.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    imageUrl: "/images/placeholder.jpg",
    price: "$99",
    category: "E-commerce",
    status: "Available",
  },
};
