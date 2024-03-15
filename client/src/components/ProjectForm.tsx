import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type InputType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface ProjectType {
  name: string;
  description: string;
}

const ProjectForm = () => {
  const [project, setProject] = useState<ProjectType>({
    name: "",
    description: "",
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }],
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
      variables: project,
    });
  };

  return (
    <div>
      <Card className="my-5">
        <CardHeader>
          <CardTitle>Create a new project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="py-1">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name of your project"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description" className="py-1" >Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Write a description"
                onChange={handleChange}
              />
            </div>
            {error && <p>{error.message}</p>}
            <Button className="w-full my-2" disabled={!project.name || !project.description || loading}>
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectForm;
