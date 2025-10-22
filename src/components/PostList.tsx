import React, { useMemo, useState } from 'react';
import { usePosts } from '../context/PostsContext';
import PostCard from './PostCard';

const PostList: React.FC = () => {
  const { posts, deletePost } = usePosts();
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(p => p.title.toLowerCase().includes(q));
  }, [posts, filter]);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Danh sách bài viết ({filtered.length}/{posts.length})</h2>
        <div>
          <input placeholder="Tìm theo tiêu đề..." value={filter} onChange={e => setFilter(e.target.value)} />
        </div>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <PostCard key={p.id} post={p} onDelete={(id) => deletePost(id)} />
        ))}
        {filtered.length === 0 && <div>Không tìm thấy bài viết.</div>}
      </div>
    </div>
  );
};

export default PostList;