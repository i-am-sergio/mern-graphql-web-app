import { DELETE_TASK } from "../../graphql/tasks"
import { Task } from "../../interfaces/tasks"
import { useMutation } from "@apollo/client"
import {
  Card,
  CardDescription,
  CardHeader
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const TaskCard : React.FC<{task : Task}> = ({ task }) => {
  
  const [deleteTask] = useMutation(DELETE_TASK,{
    refetchQueries : ["getProject"]
  })
  
  return (
    <Card className="w-full flex flex-row items-center justify-between px-4 my-2 pr-8" >
      <CardHeader>
        <CardDescription>{task.title}</CardDescription>
      </CardHeader>
      <Button
      onClick={() => {
        deleteTask(
          {variables : {id : task._id}}
        )
      }}
      variant="destructive"
      >Delete</Button>
    </Card>
  )
}

export default TaskCard