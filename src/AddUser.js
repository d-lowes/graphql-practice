import { useQuery, gql } from '@apollo/client';

function AddUser() {
  const CREATE_USER = gql`
  mutation createUser {
    createUser(username:) {
      id
      body
      user {
        username
      }
    }
  }
`;
}