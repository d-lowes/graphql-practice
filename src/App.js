import './App.css';
import { useQuery, gql } from '@apollo/client';
import DisplayUsers from './DisplayUsers';
import DisplayMessages from './DisplayMessages';
import { Route, BrowserRouter, Router, Link, Routes } from 'react-router-dom';

function App() {
  return (<div className="App">

    <h2>My first Apollo app 🚀</h2>
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<DisplayUsers />} />
        <Route path='/messages' element={<DisplayMessages />} />
        {/* <Route path='/adduser' element={<AddUser />} />
        <Route path='/addmessage' element={<AddMessage />} /> */}
      </Routes>
    </BrowserRouter>
    <Link to='/users'>users</Link>
    <Link to='/messages'>messages</Link>
    {/* <Link to='/adduser'>add user</Link>
    <Link to='/addmessage'>add message</Link> */}
  </div>
  );
}

export default App;