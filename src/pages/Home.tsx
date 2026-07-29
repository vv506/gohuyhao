import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAIN_CATEGORIES, MOCK_PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

export function Home() {
  const { addToCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ sớm liên hệ!');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const featuredProducts = MOCK_PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex flex-col md:flex-row overflow-hidden pt-20 bg-white md:mt-0">
        {/* Left Column: Content */}
        <div className="w-full md:w-[45%] px-6 md:px-12 py-12 md:py-24 flex flex-col justify-center relative z-10 text-brand-dark">
          <div className="hidden md:block absolute top-12 left-12 text-sm font-semibold uppercase tracking-widest text-brand-primary/80 mb-4">
            Đồ Gỗ Mỹ Nghệ
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
          >
            Nội Thất Gỗ <br />
            <span className="text-brand-primary"> Truyền Thống</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-brand-dark/80 leading-relaxed max-w-[450px] mb-10"
          >
            Chúng tôi gìn giữ bản sắc văn hóa qua từng vân gỗ, mang đến sự ấm cúng, vững chãi và vẻ đẹp mộc mạc cho ngôi nhà bạn.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link 
              to="/products"
              className="bg-brand-primary text-white px-8 py-3 font-semibold uppercase text-sm tracking-widest hover:bg-brand-dark transition-all text-center w-full sm:w-auto shadow-md border border-brand-primary hover:border-brand-dark"
            >
              Xem Sản Phẩm
            </Link>
            <Link 
              to="/news"
              className="px-8 py-3 font-semibold uppercase text-sm tracking-widest text-brand-dark hover:bg-gray-50 transition-colors text-center w-full sm:w-auto border border-brand-dark/20 hover:border-brand-dark/40"
            >
              Đọc Tin Tức
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Visual Layout */}
        <div className="w-full md:w-[55%] relative flex items-center justify-center min-h-[400px] p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full h-full relative overflow-hidden rounded-md shadow-2xl"
          >
             <img 
               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
               alt="Gỗ truyền thống"
               className="w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </section>

      {/* Categories Banners */}
      <section className="py-24 bg-white border-t border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-4">Không Gian Sống</h2>
            <div className="w-16 h-1 bg-brand-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {MAIN_CATEGORIES.map((category, index) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden h-[300px] md:h-[400px] block"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <Link to={`/products?category=${category.slug}`}>
                    <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:text-brand-secondary inline-block">{category.name}</h3>
                  </Link>
                  <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 mt-2">
                    {(category.subcategories || []).map(sub => (
                      <Link 
                        key={sub.id} 
                        to={`/products?category=${sub.slug}`}
                        className="bg-white/20 hover:bg-white/40 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-4">Mẫu Nội Thất Nổi Bật</h2>
              <div className="w-16 h-1 bg-brand-primary"></div>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium">
              Tất cả sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white border border-gray-100 p-4 rounded-xl hover:shadow-xl transition-shadow duration-300">
                <Link to={`/products/${product.slug}`} className="block relative overflow-hidden rounded-lg aspect-[4/5] mb-4 bg-gray-100">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.bestseller && (
                    <span className="absolute top-3 left-3 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                </Link>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-serif text-lg leading-snug">
                    <Link to={`/products/${product.slug}`} className="hover:text-brand-secondary transition-colors line-clamp-1">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-brand-dark">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors py-2 rounded-md text-sm font-medium"
                >
                  Thêm Vào Giỏ
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/products" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium">
                Tất cả sản phẩm <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4 text-white uppercase tracking-wider">Vì Sao Chọn <span className="text-brand-primary">Chúng Tôi</span></h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Huy Hào khẳng định thương hiệu thông qua bề dày kinh nghiệm và những chính sách bảo vệ quyền lợi tối đa cho khách hàng.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-8 text-center bg-white/5 border border-white/10 p-8 rounded-sm">
               <div>
                  <span className="block text-4xl font-serif text-brand-primary mb-2">15+</span>
                  <span className="text-xs uppercase tracking-widest text-white/70">Năm Kinh Nghiệm</span>
               </div>
               <div>
                  <span className="block text-4xl font-serif text-brand-primary mb-2">5000+</span>
                  <span className="text-xs uppercase tracking-widest text-white/70">Dự Án Hoàn Thiện</span>
               </div>
               <div>
                  <span className="block text-4xl font-serif text-brand-primary mb-2">300+</span>
                  <span className="text-xs uppercase tracking-widest text-white/70">Nghệ Nhân Mộc</span>
               </div>
               <div>
                  <span className="block text-4xl font-serif text-brand-primary mb-2">10+</span>
                  <span className="text-xs uppercase tracking-widest text-white/70">Giải Thưởng</span>
               </div>
            </div>

            {/* Guarantees */}
            <div className="flex flex-col h-full justify-center">
              <div className="space-y-6">
                <Link to="/about" className="block border-l-2 border-brand-primary pl-4 hover:border-brand-secondary transition-colors group cursor-pointer">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-brand-primary transition-colors">Cam Kết Gỗ Thật 100%</h4>
                  <p className="text-gray-400 text-sm">Đền bù 200% nếu sai chủng loại.</p>
                </Link>
                <Link to="/about" className="block border-l-2 border-brand-primary pl-4 hover:border-brand-secondary transition-colors group cursor-pointer">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-brand-primary transition-colors">Bảo Hành 5 Năm</h4>
                  <p className="text-gray-400 text-sm">Cho mọi lỗi kỹ thuật chế tác.</p>
                </Link>
                <Link to="/about" className="block border-l-2 border-brand-primary pl-4 hover:border-brand-secondary transition-colors group cursor-pointer">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-brand-primary transition-colors">Bảo Trì Trọn Đời</h4>
                  <p className="text-gray-400 text-sm">Đánh bóng, làm mới định kỳ.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-brand-bg/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-4">Để lại thông tin để nhận tư vấn chi tiết</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto"></div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto">Đội ngũ kỹ sư và chuyên gia của chúng tôi sẽ liên hệ lại với quý khách trong thời gian sớm nhất để đưa ra những cấu hình sản phẩm phù hợp nhất.</p>
          </div>
          
          <form className="bg-white p-8 md:p-12 shadow-xl rounded-sm border border-gray-100" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Họ và tên *</label>
                <input type="text" className="w-full border-b-2 border-gray-200 focus:border-brand-primary py-2 outline-none transition-colors bg-transparent" placeholder="Vui lòng nhập họ tên" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Số điện thoại *</label>
                <input type="tel" pattern="^(01|02|03|05|07|08|09)[0-9]{8}$" title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09" className="w-full border-b-2 border-gray-200 focus:border-brand-primary py-2 outline-none transition-colors bg-transparent" placeholder="Vui lòng nhập số điện thoại" required />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Email</label>
              <input type="email" pattern="^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$" title="Vui lòng nhập email hợp lệ" className="w-full border-b-2 border-gray-200 focus:border-brand-primary py-2 outline-none transition-colors bg-transparent" placeholder="Vui lòng nhập địa chỉ email" />
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-brand-dark uppercase tracking-wider">Nội dung cần tư vấn *</label>
              <textarea className="w-full border-b-2 border-gray-200 focus:border-brand-primary py-2 outline-none transition-colors min-h-[100px] resize-none bg-transparent" placeholder="Quý khách cần tư vấn về sản phẩm nào (thiết kế, kích thước, chất liệu,...)?" required></textarea>
            </div>
            <button disabled={isSubmitting} type="submit" className="w-full bg-brand-dark text-white hover:bg-brand-primary transition-colors py-4 uppercase tracking-widest font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? 'Đang gửi đi...' : 'Gửi Thông Tin'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
