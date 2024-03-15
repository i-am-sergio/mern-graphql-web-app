import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import { Project } from "../interfaces/projects";
import TaskList from "../components/tasks/TaskList";
import { Task } from "../interfaces/tasks";
import TaskForm from "../components/tasks/TaskForm";

interface ProjectDetails extends Project {
  tasks: Task[];
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<{ project: ProjectDetails }>(
    GET_PROJECT,
    {
      variables: { id: id },
      skip: !id,
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <div>
      <h1>{data && data.project._id}</h1>
      <p>{data && data.project.description}</p>
      <button>Delete</button>
      <TaskForm />
      {/* <TaskForm projectId={id} /> */}
      <TaskList tasks={
        data && data.project.tasks ? data.project.tasks : []
      } />
    </div>
  );
};

export default ProjectDetails;
