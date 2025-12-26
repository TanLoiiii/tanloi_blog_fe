import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';
import { posts } from '../datas/PostData';

const ListPost = () => {
  const navigate = useNavigate();
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Bài Viết Mới Nhất</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Chia sẻ kiến thức và kinh nghiệm lập trình
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {latestPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={() => navigate('/posts')}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem tất cả bài viết →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ListPost;
