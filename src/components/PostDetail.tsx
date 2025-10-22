import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePosts } from '../context/PostsContext';
import { format } from 'date-fns';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPost, deletePost } = usePosts();
  const navigate = useNavigate();

  const post = id ? getPost(id) : undefined;
  if (!post) return <div className="card">Không tìm thấy bài viết</div>;

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      deletePost(post.id);
      navigate('/');
    }
  };

  return (
    <div className="card">
      <button onClick={() => navigate(-1)} className="btn-secondary">Quay lại</button>
      <h1>{post.title}</h1>
      <div className="meta">{post.author} • {format(new Date(post.createdAt), 'dd/MM/yyyy')}</div>
      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', borderRadius: 8, marginTop: 12 }} />
      <p style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{post.content}</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button onClick={handleDelete} className="btn-danger" style={{ marginLeft: 8 }}>Xóa bài viết</button>
      </div>
    </div>
  );
};

export default PostDetail;