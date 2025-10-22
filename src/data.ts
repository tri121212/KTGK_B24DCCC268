// src/data.ts
import { Post } from './types';

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Hướng dẫn React Hooks cơ bản',
    author: 'Nguyễn A',
    thumbnail: 'https://picsum.photos/seed/react/800/450',
    content: 'React Hooks giúp bạn quản lý state và lifecycle dễ dàng. '.repeat(30),
    category: 'Công nghệ',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Kinh nghiệm du lịch Hà Giang 3 ngày 2 đêm',
    author: 'Trần B',
    thumbnail: 'https://picsum.photos/seed/travel/800/450',
    content: 'Hà Giang là nơi có cảnh sắc núi non hùng vĩ... '.repeat(30),
    category: 'Du lịch',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: '3',
    title: '10 quán ăn ngon ở Sài Gòn',
    author: 'Lê C',
    thumbnail: 'https://picsum.photos/seed/food/800/450',
    content: 'Sài Gòn có rất nhiều món ngon: phở, bún, cơm... '.repeat(30),
    category: 'Ẩm thực',
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: '4',
    title: 'Làm sao để cân bằng cuộc sống?',
    author: 'Phạm D',
    thumbnail: 'https://picsum.photos/seed/life/800/450',
    content: 'Cân bằng giữa công việc và cuộc sống là điều quan trọng... '.repeat(30),
    category: 'Đời sống',
    createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: '5',
    title: 'Mẹo nhỏ lập trình hiệu quả',
    author: 'Hoàng E',
    thumbnail: 'https://picsum.photos/seed/code/800/450',
    content: 'Tổ chức mã, viết test và đọc tài liệu giúp bạn nhanh hơn... '.repeat(30),
    category: 'Công nghệ',
    createdAt: new Date(Date.now() - 86400000 * 30).toISOString(),
  },
];