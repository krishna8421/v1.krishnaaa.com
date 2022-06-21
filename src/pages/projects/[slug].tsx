import { Main } from "@layouts/Main";
import { capitalizeFirstLetter, capitalizeFirstLetterOfEveryWord } from "@utils/capitalize";
import { GithubIcon } from "@components/SocialIcons";
import { allProjects, Project } from "@contentlayer/generated";
import { Content } from "@components/Content";
import Tags from "@components/Tag";

const Project = ({ project }: { project: Project }) => {
  return (
    <Main
      title={`${capitalizeFirstLetterOfEveryWord(project.name)} | Projects`}
      description={capitalizeFirstLetter(project.summary)}
      image={project.image}
      type="article"
    >
      <header className="mt-16 flex w-fit items-center justify-center gap-8">
        <h3 className="text-3xl font-bold underline decoration-white decoration-4 underline-offset-4 md:text-5xl">
          <a href={project.url}>{project.name}</a>
        </h3>
        <GithubIcon className="translate-y-1" h={40} w={40} href={project.github} />
      </header>
      <div className="my-12">
        {project.tags.map((tag, index) => (
          <Tags key={index} name={tag.name} url={tag.url} />
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
