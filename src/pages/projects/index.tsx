import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { PROJECTS_DESCRIPTION, NAME } from "@constants";
import { ProjectList } from "@components/ProjectList";
import { allProjects } from "@contentlayer/generated";

const Projects: NextPage = () => {
  return (
    <Main title={`Projects | ${NAME}`} description={PROJECTS_DESCRIPTION}>
      <div>
        {allProjects.map((project, index: number) => (
          <ProjectList key={index} name={project.name} slug={project.slug} />
        ))}
      </div>
    </Main>
  );
};

export default Projects;
