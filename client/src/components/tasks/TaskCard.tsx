import { DELETE_TASK } from "../../graphql/tasks"
import { Task } from "../../interfaces/tasks"
import { useMutation } from "@apollo/client"

const TaskCard : React.FC<{task : Task}> = ({ task }) => {
  
  const [deleteTask] = useMutation(DELETE_TASK,{
    refetchQueries : ["getProject"]
  })
  
  return (
    <div>
      <h3>{task._id} {task.title}</h3>
      <button
      onClick={() => {
        deleteTask(
          {variables : {id : task._id}}
        )
      }}
      >Delete</button>
    </div>
  )
}

export default TaskCard