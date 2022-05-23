import { Project } from "@interfaces";

export const projects: Project[] = [
  {
    name: "public apis site",
    description:
      "this is the 1st actual project i completed after learning web development. the aim of the project was to provide a user friendly site for the public-apis repo.",
    image: [
      {
        src: "/images/projects/public-apis-site-1.png",
        w: 1552,
        h: 935,
      },
      {
        src: "/images/projects/public-apis-site-2.png",
        w: 1552,
        h: 935,
      },
    ],
    slug: "public-apis-site",
    url: "https://public-apis-site.vercel.app",
    github: "http://github.com/krishna8421/public-apis-site",
    featured: true,
    tags: ["nextjs", "react", "chakra-ui", "framer-motion"],
  },
];
