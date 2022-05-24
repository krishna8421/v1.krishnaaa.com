import { NextPage } from "next";
import { Main } from "@layouts/Main";
import { PROJECTS_DESCRIPTION, NAME } from "@constants";
import { projects } from "@data/projects";
import { ProjectList } from "@components/ProjectList";
import { Project } from "@interfaces";

const Projects: NextPage = () => {
  return (
    <Main title={`Projects | ${NAME}`} description={PROJECTS_DESCRIPTION}>
      <h3 className="font-bold my-8">Projects</h3>
      <div>
        {projects.map((project: Project, index: number) => (
          <ProjectList key={index} name={project.name} slug={project.slug} />
        ))}
      </div>
    </Main>
  );
};

export default Projects;