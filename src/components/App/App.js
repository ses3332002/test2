import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from '../Users/Users';
import Editor from '../Editor/Editor';
import Welcome from '../Welcome/Welcome';

export let AppContext = createContext(null);

export default function App() {
  let [curUser, setCurUser] = useState(null);
  return (
    <div>
      <AppContext.Provider
        value={{
          curUser,
          setCurUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/edit" element={<Editor />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
