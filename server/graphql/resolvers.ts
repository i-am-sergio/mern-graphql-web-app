import Project from "../models/Project"
import Task from "../models/Task"
import { ProjectType, TaskType } from "../types/types"

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        projects: async () => await Project.find(),
        project: async (_: any, {_id} : { _id: string }) => await Project.findById(_id),
        tasks: async () => await Task.find(),
        task: async (_: any, {_id} : { _id: string }) => await Task.findById(_id)
    },
    Mutation: {
        createProject: async (_: any, { name, description }: ProjectType) => {
            const project = new Project({ name, description })
            const savedProject = await project.save()
            return savedProject
        },
        createTask: async (_: any, { title, projectId } : TaskType) => {
            const projectFound = await Project.findById(projectId)
            if (!projectFound) throw new Error("Project not found")

            const task = new Task({ title, projectId })
            const savedTask = await task.save()
            return savedTask
        },
        deleteProject: async (_: any, { _id } : { _id: string }) => {
            const projectDeleted = await Project.findByIdAndDelete(_id)
            if (!projectDeleted) throw new Error("Project not found")
            await Task.deleteMany({ projectId: _id })
            return projectDeleted
        },
        deleteTask: async (_: any, { _id } : { _id: string }) => {
            const taskDeleted = await Task.findByIdAndDelete(_id)
            if (!taskDeleted) throw new Error("Task not found")
            return taskDeleted
        },
        updateProject: async (_: any, args: any) => {
            const updatedProject = await Project.findByIdAndUpdate(args._id, args, { new: true })
            if (!updatedProject) throw new Error("Project not found")
            return updatedProject
        },
        updateTask: async (_: any, args: any) => {
            const updatedTask = await Task.findByIdAndUpdate(args._id, args, { new: true })
            if (!updatedTask) throw new Error("Task not found")
            return updatedTask
        }
    },
    Project: {
        tasks: async (parent: any) => await Task.find({ projectId: parent._id })
    },
    Task: {
        project: async (parent: any) => await Project.findById(parent.projectId)
    }
}