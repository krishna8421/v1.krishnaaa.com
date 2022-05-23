interface ProjectImg {
  src: string;
  w: number;
  h: number;
}

export interface Project {
  name: string;
  description: string;
  image: ProjectImg[];
  url: string;
  github: string;
  featured: boolean;
  tags: string[];
  slug: string;
}
