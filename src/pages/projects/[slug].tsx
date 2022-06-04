import { Main } from "@layouts/Main";
import { capitalizeFirstLetter, capitalizeFirstLetterOfEveryWord } from "@utils/capitalize";
import { GithubIcon } from "@components/SocialIcons";
import { allProjects, Project } from "@contentlayer/generated";
import { Content } from "@components/Content";

const Project = ({ project }: { project: Project }) => {
  return (
    <Main
      title={`${capitalizeFirstLetterOfEveryWord(project.name)} | Projects`}
      description={capitalizeFirstLetter(project.summary)}
      image={project.image}
      type="article"
    >
      <header className="flex gap-8 mt-16 justify-center w-fit items-center">
        <h3 className="font-bold text-3xl underline underline-offset-4 decoration-white decoration-4 md:text-5xl">
          <a href={project.url}>{project.name}</a>
        </h3>
        <GithubIcon className="translate-y-1" h={40} w={40} href={project.github} />
      </header>
      <div className="my-12">
        {project.tags.map((tag, index) => (
          <a href={tag.url} key={index}>
            <span className="inline-block bg-custom-purple rounded-full px-3 py-1 text-xs font-semibold mr-4 mt-2">
              {tag.name}
            </span>
          </a>
        ))}
      </div>
      <Content content={project.body.code} />
    </Main>
  );
};

export async function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  return { props: { project } };
}

export default Project;
