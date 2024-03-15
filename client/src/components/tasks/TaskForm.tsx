import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });
  const { id } = useParams<{ id: string }>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
    };
    await createTask({
      variables: {
        title: target.title.value,
        projectId: id,
      },
    });
    target.title.value = "";
  };

  return (
    <Card className="w-full lg:px-12 lg:py-8">
      <CardHeader>
        <CardTitle>Create a new task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="title">Name</Label>
          <Input type="text" name="title" id="title" />
          <Button
            className="w-full mt-2"
          >Add</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaskForm;
