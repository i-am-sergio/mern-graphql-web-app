import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    tasks {
      _id
      title
      createdAt
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($title: String!, $projectId: ID) {
    createTask(title: $title, projectId: $projectId) {
      title
      createdAt
      project {
        _id
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(_id: $id) {
      _id
      title
    }
  }
`;