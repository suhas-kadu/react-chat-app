// built-in imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// user-defined imports
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import App from './App';
import "./style.scss";

// third-party imports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <App />

    </ChatContextProvider>

  </AuthContextProvider>
);
