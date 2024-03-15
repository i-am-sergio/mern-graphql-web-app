import { Task } from "../../interfaces/tasks";
import TaskCard from "./TaskCard";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
