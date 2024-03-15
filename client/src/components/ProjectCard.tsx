import { Project } from "../interfaces/projects";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="bg-zinc-400 w-full p-4 rounded-lg cursor-pointer hover:bg-zinc-300 transition duration-300 ease-in-out"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </Card>
  );
};

export default ProjectCard;
