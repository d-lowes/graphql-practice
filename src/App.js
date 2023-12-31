import './App.css';
import DisplayUsers from './DisplayUsers';
import DisplayMessages from './DisplayMessages';
import AddUser from './AddUser';
import AddMessage from './AddMessage';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';

function App() {
  return (<div className="App">

    <h2>My first Apollo app 🚀</h2>
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<DisplayUsers />} />
        <Route path='/messages' element={<DisplayMessages />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/addmessage' element={<AddMessage />} />
      </Routes>
    <Link to='/users'>users</Link>
    <Link to='/messages'>messages</Link>
    <Link to='/adduser'>add user</Link>
    <Link to='/addmessage'>add message</Link>
    </BrowserRouter>
  </div>
  );
}

export default App;