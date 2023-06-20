import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

function AddMessage() {
  const CREATE_MESSAGE = gql`
  mutation createMessage(
    $username: ID!,
    $body: String!,
    ) {
    createMessage(
      username: $username
      body: $body) {
      body
      user {
        username
      }
    }
  }
`;

  const [createUser, { loading, error }] = useMutation(CREATE_MESSAGE);

  const [formData, setFormData] = useState({
    username: "",
    body: "",
  });

  /** Handle form change. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      return {
        ...currData,
        [fieldName]: value,
      };
    });
  }

  /** Handle form submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await createUser({
      variables: formData,
    }).catch(error => {
      console.error("Error creating user:", error);
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username-input">Username:</label>
          <input
            className="form-control item"
            name="username"
            id="username-input"
            value={formData.username}

            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="body-input">Message:</label>
          <input
            className="form-control item"
            name="body"
            id="body-input"
            value={formData.body}

            onChange={handleChange}
          ></input>
        </div>
        <button type='submit'>click me yo</button>
      </form>
    </div>
  );
}

export default AddMessage;