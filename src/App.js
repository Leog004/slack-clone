import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {
          loading && <div>Loading...</div>
        }
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Routes>
                  <Route path="/" element={
                    <Chat />
                  } />
                </Routes>
              </AppBody>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
