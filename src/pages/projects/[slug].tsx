import { projects } from "@data/projects";
import { Main } from "@layouts/Main";
import { capitalizeFirstLetter, capitalizeFirstLetterOfEveryWord } from "@utils/capitalize";
import { Project } from "@interfaces";
import { GithubIcon } from "@components/SocialIcons";
import Image from "next/image";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <Main
      title={`${capitalizeFirstLetterOfEveryWord(project.name)} | Projects`}
      description={capitalizeFirstLetter(project.description)}
      image={project.image[0].src}
      type="article"
    >
      <header className="flex gap-8 mt-24 justify-center w-fit items-center">
        <h3 className="font-bold text-3xl underline underline-offset-4 decoration-white decoration-4 md:text-5xl">
          <a href={project.url}>{project.name}</a>
        </h3>
        <GithubIcon className="translate-y-1" h={40} w={40} href={project.github} />
      </header>
      <div className="my-8">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-custom-purple rounded-full px-3 py-1 text-xs font-semibold mr-4 mt-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="my-12">{project.description}</p>
      <div className="mb-24">
        {project.image.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={project.name}
            width={image.w}
            height={image.h}
            className="rounded"
          />
        ))}
      </div>
    </Main>
  );
};

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { props: { project } };
}

export default Project;
