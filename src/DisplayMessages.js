
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      body
      user {
        username
      }
    }
  }
`;

function DisplayMessages() {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;;
  if (error) return <p>Error : {error.message} </p>;;

  return data.messages.map(({ id, body, user }) => (
    <div key={id} >
      <h4>{user.username}</h4>
      <p>{body} </p>
      < br />
    </div>
  ));
}

export default DisplayMessages;