import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import { Project } from "../interfaces/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const { loading, error, data } = useQuery<{ projects: Project[] }>(
    GET_PROJECTS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="overflow-y-auto w-full px-5" >
      <h1 className="font-bold text-2xl py-4" >Projects</h1>
      <ul>
        {data.projects.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
