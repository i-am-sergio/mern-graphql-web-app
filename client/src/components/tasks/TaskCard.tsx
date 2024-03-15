import { DELETE_TASK } from "../../graphql/tasks"
import { Task } from "../../interfaces/tasks"
import { useMutation } from "@apollo/client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const TaskCard : React.FC<{task : Task}> = ({ task }) => {
  
  const [deleteTask] = useMutation(DELETE_TASK,{
    refetchQueries : ["getProject"]
  })
  
  return (
    <Card className="w-[350px]" >
      <CardHeader>
        <CardTitle> {task.title} </CardTitle>
        {/* <h3>{task._id} {task.title}</h3> */}
      </CardHeader>
      <button
      onClick={() => {
        deleteTask(
          {variables : {id : task._id}}
        )
      }}
      >Delete</button>
    </Card>
  )
}

export default TaskCard