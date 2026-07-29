import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/10 bg-white pt-20 pb-10 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/">
              <img src="/img/logo.jpg" alt="Huy Hào Logo" className="h-[4.5rem] w-auto object-contain object-left mb-6" />
            </Link>
            <p className="text-brand-dark/60 text-sm leading-relaxed">
              Kiến tạo không gian sống đẳng cấp với những sản phẩm nội thất gỗ chất lượng cao, mang đậm tính nghệ thuật và sự bền vững.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center text-brand-dark/60 hover:bg-brand-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center text-brand-dark/60 hover:bg-brand-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-primary/20 rounded-full flex items-center justify-center text-brand-dark/60 hover:bg-brand-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-brand-primary mb-6">Liên Hệ</h3>
            <ul className="space-y-4 text-sm text-brand-dark">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <a href="https://maps.app.goo.gl/TnBJLEC4XtXtCBRv7" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-dark/80 hover:text-brand-primary transition-colors">405/28/34 Đ. Thống Nhất, An Hội Đông, Hồ Chí Minh</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="tel:0909515712" className="font-medium text-brand-dark/80 hover:text-brand-primary transition-colors">0909515712</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="mailto:giahuy04021997@gmail.com" className="font-medium text-brand-dark/80 hover:text-brand-primary transition-colors">giahuy04021997@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-brand-primary mb-6">Chính Sách</h3>
            <ul className="space-y-3 text-sm font-medium text-brand-dark/70">
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Trung tâm trợ giúp</Link></li>
              <li><Link to="/policy" className="hover:text-brand-primary transition-colors">Chính sách bảo hành</Link></li>
              <li><Link to="/policy" className="hover:text-brand-primary transition-colors">Chính sách giao hàng</Link></li>
              <li><Link to="/policy" className="hover:text-brand-primary transition-colors">Bảo mật thông tin</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-brand-primary mb-6">Trụ sở chính</h3>
            <div className="w-full h-40 bg-gray-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.514877358124!2d106.66198087427242!3d10.848388657863794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a562f57c09%3A0xa276dd69b44a0ca8!2zQ8O0bmcgVHkgVG5oaCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSBYdeG6pXQgTmjhuq1wIEto4bqpdSBH4buXIEh1eSBIw6Bv!5e0!3m2!1svi!2s!4v1781599546885!5m2!1svi!2s" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>

        </div>

        {/* Footer 2 */}
        <div className="border-t border-brand-primary/10 pt-12 pb-8 flex flex-col items-center justify-center text-center text-brand-dark/80 text-sm space-y-3">
          <h2 className="font-bold text-lg md:text-xl text-brand-dark mb-2">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU GỖ HUY HÀO</h2>
          <p>
            Trụ sở chính: <a href="https://maps.app.goo.gl/TnBJLEC4XtXtCBRv7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">405/28/34 Đ. Thống Nhất, An Hội Đông, Hồ Chí Minh</a>
          </p>
          <p>
            Email: <a href="mailto:giahuy04021997@gmail.com" className="hover:text-brand-primary transition-colors">giahuy04021997@gmail.com</a>
          </p>
          <p>GPKD số 0315341740 do Sở KH &amp; ĐT TP. Hồ Chí Minh cấp ngày 22/10/2018</p>
          <p>GD/Sở hữu website: Từ Hữu Hiếu</p>
          <div className="mt-4">
            <img src="/img/logo-bo-cong-thuong.jpg" alt="Đã thông báo Bộ Công Thương" className="h-16 w-auto object-contain mx-auto" />
          </div>
        </div>

        {/* Absolute Footer */}
        <div className="border-t border-brand-primary/10 pt-6 mt-2 flex justify-center text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">
          <p>ESTABLISHED SINCE 2011 • © NỘI THẤT HUY HÀO</p>
        </div>
      </div>
    </footer>
  );
}
