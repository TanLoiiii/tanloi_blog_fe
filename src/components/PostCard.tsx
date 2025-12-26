import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Post } from '../datas/PostData';

interface PostCardProps {
  post: Post;
  index?: number;
}

const PostCard = ({ post, index = 0 }: PostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Link
        to={`/posts/${post.id}`}
        className="block bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
      >
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag} 
                className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <img 
                src={post.authorAvatar} 
                alt={post.author} 
                className="w-6 h-6 rounded-full" 
              />
              <span className="font-medium">{post.author}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
