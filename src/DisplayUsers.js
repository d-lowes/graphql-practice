import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      username
      first_name
      last_name
      messages {
        id
        body
      }
    }
  }
`;

function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map(({ username, first_name, last_name, messages }) => (
    <div key={username}>
      <h3>{first_name} {last_name}</h3>
      <br />
      {messages.length > 0 && <div>
        Messages:
        <ul>{messages.map(m => <li key={m.id}>{m.body}</li>)}</ul>
      </div>}
      <br />
    </div>
  ));
}

export default DisplayUsers;