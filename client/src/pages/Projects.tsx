import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  return (
    <div className="w-full flex flex-col px-5 py-10 sm:px-20 sm:flex-col">
      <div className="w-full text-center text-2xl font-extrabold">
        <h1>Project Manager</h1>
      </div>
      <div className="flex flex-col px-5 py-10 sm:px-20 sm:flex-row">
        <div className="w-full sm:w-2/5">
          <ProjectForm />
        </div>
        <div className="w-full sm:w-3/5">
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
