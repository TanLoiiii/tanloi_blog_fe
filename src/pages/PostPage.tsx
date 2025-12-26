import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posts } from '../datas/PostData';

const PostPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Bài Viết Công Nghệ</h1>
            <p className="text-gray-600">Chia sẻ kiến thức và kinh nghiệm lập trình</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className="bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                      <span key={tag} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
