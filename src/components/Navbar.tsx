import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="https://picsum.photos/seed/logo/80/80" alt="logo" />
          <span>My Blog</span>
        </div>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Trang chủ
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>
            Bài viết
          </NavLink>
        </nav>
        <div>
          <button className="btn" onClick={() => navigate('/posts/create')}>
            Viết bài mới
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;