import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, StyledMain, StyledSection, StyledTable,} from '../styles';

const Dashboard = (props) => {
  const [ formState, setFormState ] = useState({
    name: "",
    category: "",
    image: "",
    details: "",
    saved: false
  });

  // form helper functions
  const handleChange = event => {

    const value = event.target.name === 'saved'
    ? event.target.checked
    : event.target.value

    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: value
    }));
  }
  const handleSubmit = event => {
    event.preventDefault();

    props.createStore(formState);
    setFormState({
        name: "",
        category: "",
        image: "",
        details: "",
        saved: false
    }); // clear form after its been submitted
}

return (
  <>
  <Helmet>
      <title>Dashboard | Que Como ⚛️</title>
      <meta name="description" content="Add Your Favorite Spots" />
      <meta name="keywords" content="Dashboard, food, community, experience" />
  </Helmet>
  <StyledMain>
      <h1>Your Stores</h1>
      <StyledSection>
                  <StyledTable>
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Category</th>
                              <th>Details</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              props.stores.map(s => (
                                  <tr key={s._id}>
                                      <td>{s.name}</td>
                                      <td>{s.category}</td>
                                      <td><Link to={`/stores/${s._id}`}><button>See More Details</button></Link></td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </StyledTable>
          <StyledForm onSubmit={handleSubmit}>
              <label>Name
                  <input
                      onChange={handleChange}
                      value={formState.name}
                      name="name"
                      type="text"
                  />
              </label>
              <label>Category
                  <input
                      onChange={handleChange}
                      value={formState.category}
                      name="category"
                      type="text"
                  />
              </label>
              <label>Image
                  <input
                      onChange={handleChange}
                      value={formState.image}
                      name="image"
                      type="text"
                  />
              </label>
              <label>Details
                  <input
                      onChange={handleChange}
                      value={formState.details}
                      name="details"
                      type="text"
                  />
              </label>
              <label>Saved
                  <input
                      type="checkbox"
                      name="saved"
                      onChange={handleChange}
                      checked={formState.saved}
                  />
              </label>
              <input type="submit" value="Add Store" />
          </StyledForm>
      </StyledSection>
  </StyledMain>
</>
);
};
export default Dashboard;
