import { Task } from "../../interfaces/tasks";
import TaskCard from "./TaskCard";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="flex flex-col-reverse my-4">
      {tasks.map((task: Task) => (
        <TaskCard key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
