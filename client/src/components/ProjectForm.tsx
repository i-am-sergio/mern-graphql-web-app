import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

type InputType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface ProjectType {
  name: string;
  description: string;
}

const ProjectForm = () => {
  const [project, setProject] = useState<ProjectType>({ name: "", description: "" });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT,{
    refetchQueries: [{ query: GET_PROJECTS }]
  });

  const handleChange = (e: InputType) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProject({ 
        variables: project
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>{error.message}</p>}
        <input
          type="text"
          name="name"
          placeholder="Write a title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          placeholder="Write a description"
          onChange={handleChange}
        ></textarea>
        <button
          disabled={!project.name || !project.description || loading}
        >Save</button>
      </form>
    </div>
  );
};

export default ProjectForm;
