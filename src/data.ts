import { Post } from './types';

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Hướng dẫn React Hooks cơ bản',
    author: 'Nguyễn Văn Hải',
    thumbnail: 'https://citgroup.vn/wp-content/uploads/2024/02/tai-sao-lai-su-dung-reactjs.png',
    content: 'React Hooks giúp bạn quản lý state và lifecycle dễ dàng. ' .repeat(30),
    category: 'Công nghệ',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Kinh nghiệm du lịch Hà Giang 3 ngày 2 đêm',
    author: 'Đào Xuân Hoàng',
    thumbnail: 'https://cdn.xanhsm.com/2025/02/89f23fc0-du-lich-ha-giang-tu-tuc-1.jpg',
    content: 'Hà Giang là nơi có cảnh sắc núi non hùng vĩ... '.repeat(30),
    category: 'Du lịch',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: '3',
    title: '10 quán ăn ngon ở Sài Gòn',
    author: 'Nguyễn Tùng Dương',
    thumbnail: 'https://bloganchoi.com/wp-content/uploads/2023/07/quan-com-ngon-sai-gon-1.jpg',
    content: 'Sài Gòn có rất nhiều món ngon: phở, bún, cơm... '.repeat(30),
    category: 'Ẩm thực',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: '4',
    title: 'Làm sao để cân bằng cuộc sống?',
    author: 'Phạm Tiến Đạt',
    thumbnail: 'https://blog.skillhub.vn/wp-content/uploads/2022/07/Ky-nang-can-bang-cuoc-song-giup-tan-sinh-vien-lam-quen-moi-truong-moi-2.png',
    content: 'Cân bằng giữa công việc và cuộc sống là điều quan trọng... '.repeat(30),
    category: 'Đời sống',
    createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: '5',
    title: 'Mẹo nhỏ lập trình hiệu quả',
    author: 'Phúc Đoàn',
    thumbnail: 'https://funix.edu.vn/wp-content/uploads/2022/02/m%E1%BA%B9o-h%E1%BB%8Dc-l%E1%BA%ADp-tr%C3%ACnh.png',
    content: 'Tổ chức mã, viết test và đọc tài liệu giúp bạn nhanh hơn... '.repeat(30),
    category: 'Công nghệ',
    createdAt: new Date(Date.now() - 86400000 * 30).toISOString(),
  },
];
