import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/create" element={<PostForm mode="create" />} />
        <Route path="/create" element={<PostForm mode="create" />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/edit/:id" element={<PostForm mode="edit" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;