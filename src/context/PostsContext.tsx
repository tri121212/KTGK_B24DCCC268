// src/context/PostsContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Post } from '../types';
import { samplePosts } from '../data';
import { v4 as uuidv4 } from 'uuid';

interface PostsContextValue {
  posts: Post[];
  addPost: (p: Omit<Post, 'id' | 'createdAt'>) => Post;
  updatePost: (id: string, updated: Partial<Post>) => Post | null;
  deletePost: (id: string) => boolean;
  getPost: (id: string) => Post | undefined;
}

const PostsContext = createContext<PostsContextValue | undefined>(undefined);

export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error('usePosts must be used within PostsProvider');
  return ctx;
};

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    // load from localStorage nếu có, else sample
    try {
      const raw = localStorage.getItem('posts_v1');
      if (raw) return JSON.parse(raw) as Post[];
    } catch {}
    return samplePosts;
  });

  useEffect(() => {
    localStorage.setItem('posts_v1', JSON.stringify(posts));
  }, [posts]);

  const addPost = (p: Omit<Post, 'id' | 'createdAt'>) => {
    const newPost: Post = { ...p, id: uuidv4(), createdAt: new Date().toISOString() };
    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const updatePost = (id: string, updated: Partial<Post>) => {
    let updatedPost: Post | null = null;
    setPosts(prev =>
      prev.map(post => {
        if (post.id === id) {
          updatedPost = { ...post, ...updated };
          return updatedPost;
        }
        return post;
      })
    );
    return updatedPost;
  };

  const deletePost = (id: string) => {
    const exists = posts.some(p => p.id === id);
    if (!exists) return false;
    setPosts(prev => prev.filter(p => p.id !== id));
    return true;
  };

  const getPost = (id: string) => posts.find(p => p.id === id);

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost, getPost }}>
      {children}
    </PostsContext.Provider>
  );
};