import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import { Project } from "../interfaces/projects";
import TaskList from "../components/tasks/TaskList";
import { Task } from "../interfaces/tasks";
import TaskForm from "../components/tasks/TaskForm";
import { Button } from "@/components/ui/button";

interface ProjectDetails extends Project {
  tasks: Task[];
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()
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
    <div className="flex flex-col px-5 py-5 sm:px-32 lg:px-48">
      <div className="py-2 w-full">
        <Button className="w-1/2 sm:w-1/5"
          onClick={
            () => {
              navigate("/projects")
            }
          }
        >Back to Project</Button>
      </div>
      <div className="bg-slate-200 rounded-md px-4 sm:px-8">
        <div className="flex flex-col px-4 py-8 bg-slate-100 lg:px-12 rounded-md my-8">
          <h1 className="">
            <span className="font-bold">ID: </span> {(data?.project._id)?.substring(0, 8)}
          </h1>
          <h2>
            <span className="font-bold">Name: </span> {data?.project.name}
          </h2>
          <p>
            <span className="font-bold">Description: </span>
            {data?.project.description}
          </p>
          <Button variant="destructive" className="w-full mt-2">Delete</Button>
        </div>
        <TaskForm />
        {/* <TaskForm projectId={id} /> */}
        <TaskList tasks={data?.project.tasks ?? []} />
      </div>
    </div>
  );
};

export default ProjectDetails;
