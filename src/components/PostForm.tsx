import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePosts } from '../context/PostsContext';
import { Post, Category } from '../types';

type Mode = 'create' | 'edit';

const categories: Category[] = ['Công nghệ', 'Du lịch', 'Ẩm thực', 'Đời sống', 'Khác'];

const validate = (values: { title: string; author: string; content: string }) => {
  const errors: Record<string, string> = {};
  if (!values.title || values.title.trim().length < 10) errors.title = 'Tiêu đề bắt buộc, ít nhất 10 ký tự';
  if (!values.author || values.author.trim().length < 3) errors.author = 'Tác giả bắt buộc, ít nhất 3 ký tự';
  if (!values.content || values.content.trim().length < 50) errors.content = 'Nội dung bắt buộc, ít nhất 50 ký tự';
  return errors;
};

const PostForm: React.FC<{ mode: Mode }> = ({ mode }) => {
  const { id } = useParams();
  const { addPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: '',
    author: '',
    thumbnail: '',
    content: '',
    category: 'Công nghệ' as Category,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mode === 'edit' && id) {
      const p = getPost(id);
      if (!p) {
        alert('Không tìm thấy bài viết');
        navigate('/');
        return;
      }
      setValues({
        title: p.title,
        author: p.author,
        thumbnail: p.thumbnail,
        content: p.content,
        category: p.category,
      });
    }
  }, [mode, id, getPost, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    if (mode === 'create') navigate('/');
    else navigate(`/posts/${id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = { title: values.title, author: values.author, content: values.content };
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    if (mode === 'create') {
      addPost({
        title: values.title,
        author: values.author,
        thumbnail: values.thumbnail || 'https://via.placeholder.com/800x450?text=No+Image',
        content: values.content,
        category: values.category,
      });
      setTimeout(() => {
        setLoading(false);
        alert('Đăng bài thành công!');
        navigate('/');
      }, 500);
    } else if (mode === 'edit' && id) {
      updatePost(id, {
        title: values.title,
        author: values.author,
        thumbnail: values.thumbnail || 'https://via.placeholder.com/800x450?text=No+Image',
        content: values.content,
        category: values.category,
      });
      setTimeout(() => {
        setLoading(false);
        alert('Cập nhật thành công!');
        navigate(`/posts/${id}`);
      }, 500);
    }
  };

  return (
    <div className="card">
      <h2>{mode === 'create' ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Tiêu đề</label>
          <input name="title" value={values.title} onChange={handleChange} />
          {errors.title && <div className="err">{errors.title}</div>}
        </div>

        <div className="form-row">
          <label>Tác giả</label>
          <input name="author" value={values.author} onChange={handleChange} />
          {errors.author && <div className="err">{errors.author}</div>}
        </div>

        <div className="form-row">
          <label>URL ảnh thumbnail</label>
          <input name="thumbnail" value={values.thumbnail} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Thể loại</label>
          <select name="category" value={values.category} onChange={handleChange}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="form-row">
          <label>Nội dung</label>
          <textarea name="content" rows={12} value={values.content} onChange={handleChange} />
          {errors.content && <div className="err">{errors.content}</div>}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit" disabled={loading}>{mode === 'create' ? 'Đăng bài' : 'Cập nhật'}</button>
          <button type="button" onClick={handleCancel} className="btn-secondary">Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;