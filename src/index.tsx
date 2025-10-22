import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostsProvider } from './context/PostsContext';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PostsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostsProvider>
  </React.StrictMode>
);