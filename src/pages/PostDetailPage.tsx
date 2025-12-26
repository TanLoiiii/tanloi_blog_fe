import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posts } from '../datas/PostData';

const PostDetailPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
            <Link to="/posts" className="text-primary hover:underline">← Quay lại danh sách</Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <Header />
      <div className="pt-24 pb-16">
        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-96 mb-12 overflow-hidden bg-gray-900"
        >
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link to="/posts" className="text-primary hover:underline mb-6 inline-flex items-center gap-2 font-medium">
              <span>←</span> Quay lại danh sách
            </Link>
          </motion.div>
          
          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                  className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-xs">{post.date} • {post.readTime}</p>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <span>{post.views.toLocaleString()} lượt xem</span>
            </div>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-3">Chia sẻ bài viết:</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition text-sm">
                Twitter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PostDetailPage;
