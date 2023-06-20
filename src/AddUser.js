import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

function AddUser() {
  const CREATE_USER = gql`
    mutation createUser(
      $username: ID!,
      $first_name: String!,
      $last_name: String!
      ) {
      createUser(
        username: $username,
        first_name: $first_name,
        last_name: $last_name
        ) {
          username
          first_name
          last_name
      }
    }
  `;

  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
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
          <label htmlFor="first_name-input">first_name:</label>
          <input
            className="form-control item"
            name="first_name"
            id="first_name-input"
            value={formData.first_name}

            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="last_name-input">last_name:</label>
          <input
            className="form-control item"
            name="last_name"
            id="last_name-input"
            value={formData.last_name}

            onChange={handleChange}
          ></input>
        </div>
        <button type='submit'>click me yo</button>
      </form>
    </div>
  );
}

export default AddUser;