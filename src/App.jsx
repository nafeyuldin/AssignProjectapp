import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { User, Menu, Status, UsersDetails } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App h-auto">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/userdetails" element={<UsersDetails />} />
          <Route path="/status" element={<Status />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
