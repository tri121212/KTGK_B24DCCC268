import React from 'react';
import { Post } from '../types';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <div className="post-body">
        <h3>{post.title}</h3>
        <div className="meta">
          <span>{post.author}</span> • <span>{format(new Date(post.createdAt), 'dd/MM/yyyy')}</span>
        </div>
        <p>{post.content.slice(0, 100)}{post.content.length > 100 ? '...' : ''}</p>
        <div className="card-actions">
          <Link to={`/posts/${post.id}`} className="btn-link">Đọc thêm</Link>
          <button className="btn-danger" onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;