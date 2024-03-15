import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button>Add</button>
    </form>
  );
};

export default TaskForm;
