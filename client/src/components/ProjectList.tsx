import { useQuery } from "@apollo/client";
import { getProjects } from "../graphql/projects";
import { Project } from "../interfaces/projects";

const ProjectList = () => {
  const { loading, error, data } = useQuery<{projects: Project[]}>(getProjects);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;
  if (!data) return <p>No data</p>;
  
  return (
    <div>
      <h1>ProjectList</h1>
      <ul>
        {data.projects.map((project: Project) => (
          <li key={project._id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
