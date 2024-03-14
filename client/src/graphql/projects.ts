import { gql } from "@apollo/client";

export const getProjects = gql`
  query {
    projects {
      _id
      name
      description
      createdAt
    }
  }
`;

export const getTasks = gql`
  query {
    tasks {
      _id
      title
      createdAt
    }
  }
`;
