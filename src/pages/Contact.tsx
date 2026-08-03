import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Đã gửi thành công. Cảm ơn bạn!');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div className="bg-brand-bg p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-brand-dark mb-6 border-b border-gray-200 pb-4">Liên hệ cho chúng tôi</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 text-brand-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-medium text-brand-dark mb-1">Trụ sở chính</span>
                    <a href="https://maps.app.goo.gl/TnBJLEC4XtXtCBRv7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-primary transition-colors">405/28/34 Đ. Thống Nhất, An Hội Đông, Hồ Chí Minh</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 text-brand-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-medium text-brand-dark mb-1">Xưởng sản xuất</span>
                    <a href="https://maps.app.goo.gl/mUd27QeX5cWfLPKh6" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-primary transition-colors">94 Nguyễn Thị Căn, Tân Thới Hiệp, Hồ Chí Minh</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 text-brand-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-medium text-brand-dark mb-1">Hotline</span>
                    <a href="tel:0909515712" className="text-gray-600 hover:text-brand-primary transition-colors">0909515712</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm shrink-0 text-brand-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-medium text-brand-dark mb-1">Email</span>
                    <a href="mailto:giahuy04021997@gmail.com" className="text-gray-600 hover:text-brand-primary transition-colors">giahuy04021997@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="h-64 bg-gray-200 w-full rounded-sm overflow-hidden">
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

          {/* Form */}
          <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl shadow-brand-dark/5 rounded-sm">
            <h2 className="text-2xl font-serif text-brand-dark mb-8">Gửi tin nhắn cho chúng tôi</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ & Tên *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors" placeholder="Vd: Nguyễn Văn A" required />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số Điện Thoại *</label>
                    <input type="tel" pattern="^(01|02|03|05|07|08|09)[0-9]{8}$" title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09" className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors" placeholder="Vd: 0901234567" required />
                 </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" pattern="^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$" title="Vui lòng nhập email hợp lệ" className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors" placeholder="Vd: email@example.com" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nội Dung *</label>
                  <textarea rows={5} className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors" placeholder="Yêu cầu tư vấn, thiết kế, báo giá..." required></textarea>
              </div>
              <button disabled={isSubmitting} className="w-full bg-brand-dark text-white py-4 rounded-sm font-medium hover:bg-brand-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Đang gửi đi...' : 'Gửi Tin Nhắn'}
              </button>
            </form>
          </div>
        </div>

        {/* Recruitment Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brand-dark mb-4">Tuyển dụng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Huy Hào luôn chào đón những ứng viên tài năng, đam mê với ngành nội thất gỗ tham gia vào đội ngũ của chúng tôi. 
              Hãy cùng nhau kiến tạo nên những không gian sống đẳng cấp.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="bg-white border border-gray-100 p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-brand-dark mb-2">Thợ Mộc Lành Nghề</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Xưởng sản xuất</span>
                <span className="flex items-center gap-1">Toàn thời gian</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Yêu cầu kinh nghiệm từ 3 năm trở lên trong việc chế tác nội thất gỗ tự nhiên. Đọc hiểu bản vẽ kỹ thuật tốt.
              </p>
              <a href="mailto:giahuy04021997@gmail.com?subject=Ứng tuyển vị trí Thợ Mộc Lành Nghề" className="inline-block text-brand-primary font-medium hover:text-brand-dark transition-colors text-sm underline underline-offset-4">
                Ứng tuyển ngay
              </a>
            </div>

            {/* Job 2 */}
            <div className="bg-white border border-gray-100 p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-brand-dark mb-2">Nhân Viên Kinh Doanh</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Trụ sở chính</span>
                <span className="flex items-center gap-1">Toàn thời gian</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Tư vấn, chăm sóc khách hàng. Yêu cầu giao tiếp tốt, có kỹ năng đàm phán và thuyết phục. Ưu tiên có kinh nghiệm ngành nội thất.
              </p>
              <a href="mailto:giahuy04021997@gmail.com?subject=Ứng tuyển vị trí Nhân Viên Kinh Doanh" className="inline-block text-brand-primary font-medium hover:text-brand-dark transition-colors text-sm underline underline-offset-4">
                Ứng tuyển ngay
              </a>
            </div>

            {/* Job 3 */}
            <div className="bg-white border border-gray-100 p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-brand-dark mb-2">Kiến Trúc Sư Nội Thất</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Trụ sở chính</span>
                <span className="flex items-center gap-1">Toàn thời gian</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Khảo sát, thiết kế 3D, triển khai bản vẽ kỹ thuật. Thành thạo AutoCAD, SketchUp, 3ds Max. Khả năng sáng tạo cao.
              </p>
              <a href="mailto:giahuy04021997@gmail.com?subject=Ứng tuyển vị trí Kiến Trúc Sư Nội Thất" className="inline-block text-brand-primary font-medium hover:text-brand-dark transition-colors text-sm underline underline-offset-4">
                Ứng tuyển ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
