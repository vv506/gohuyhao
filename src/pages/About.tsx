export function About() {
  return (
    <div className="pt-48 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
         <h1 className="text-5xl font-serif text-brand-dark mb-6">Câu Chuyện Của Huy Hào</h1>
         <p className="text-lg text-gray-600 leading-relaxed">Khởi nguồn từ một xưởng mộc nhỏ gia truyền từ năm 2018, Huy Hào ngày nay tự hào là thương hiệu tiên phong trong việc kiến tạo những không gian sống đẳng cấp thông qua các tuyệt tác nội thất gỗ cao cấp.</p>
      </div>

      <div className="w-full h-[600px] mb-24 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Không gian thiết kế" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
           <h2 className="text-3xl font-serif text-brand-dark mb-6">Tầm Nhìn & Sứ Mệnh</h2>
           <div className="space-y-4 text-gray-600 leading-relaxed">
             <p><strong>Tầm nhìn:</strong> Trở thành biểu tượng của sự tinh tế và chất lượng trong ngành nội thất Châu Á, nơi khách hàng tìm thấy không gian phản ánh đúng bản ngã của mình.</p>
             <p><strong>Sứ mệnh:</strong> Cung cấp các giải pháp không gian xuất sắc với sản phẩm chất lượng quốc tế, tôn trọng tự nhiên và nuôi dưỡng nghệ thuật thủ công truyền thống.</p>
           </div>
        </div>
        <div className="bg-brand-bg p-12">
            <h3 className="text-2xl font-serif text-brand-dark mb-6 border-b border-brand-secondary pb-4">Giá Trị Cốt Lõi</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full"></div> <span className="font-medium text-brand-dark">Chất Lượng Vượt Trội:</span> Vật liệu tinh tuyển.</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full"></div> <span className="font-medium text-brand-dark">Thiết Kế Tiên Phong:</span> Điêu khắc không gian.</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full"></div> <span className="font-medium text-brand-dark">Phục Vụ Tận Tâm:</span> Đồng hành trọn đời.</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand-primary rounded-full"></div> <span className="font-medium text-brand-dark">Phát Triển Bền Vững:</span> Tôn trọng Mẹ Thiên Nhiên.</li>
            </ul>
        </div>
      </div>

      {/* Thành Tựu */}
      <div className="bg-brand-dark text-white py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             <div>
                <span className="block text-5xl font-serif text-brand-primary mb-2">7+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Năm Kinh Nghiệm</span>
             </div>
             <div>
                <span className="block text-5xl font-serif text-brand-primary mb-2">1000+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Dự Án Hoàn Thiện</span>
             </div>
             <div>
                <span className="block text-5xl font-serif text-brand-primary mb-2">50+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Nghệ Nhân Mộc</span>
             </div>
             <div>
                <span className="block text-5xl font-serif text-brand-primary mb-2">10+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Thiết Kế Độc Đáo</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 mb-24">
        {/* Dịch Vụ Của Chúng Tôi */}
        <div>
           <h2 className="text-3xl font-serif text-brand-dark mb-8">Dịch Vụ Của Chúng Tôi</h2>
           <div className="space-y-6">
              <div className="p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-xl font-bold text-brand-dark mb-2">Thiết Kế & Thi Công Nội Thất</h4>
                 <p className="text-gray-600 text-sm">Tư vấn, thiết kế bản vẽ 3D và thi công hoàn thiện không gian sống mang đậm tính cá nhân hóa.</p>
              </div>
              <div className="p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-xl font-bold text-brand-dark mb-2">Cung Cấp Nguyên Vật Liệu Gỗ</h4>
                 <p className="text-gray-600 text-sm">Phân phối các dòng gỗ tự nhiên nhập khẩu nguyên khối cao cấp (Óc Chó, Sồi, Cẩm Lai, v.v.).</p>
              </div>
              <div className="p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-xl font-bold text-brand-dark mb-2">Dịch Vụ Lắp Đặt Tận Nơi</h4>
                 <p className="text-gray-600 text-sm">Đội ngũ thợ mộc lành nghề tiến hành vận chuyển và lắp ráp sản phẩm cẩn thận tại nhà khách hàng.</p>
              </div>
              <div className="p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-xl font-bold text-brand-dark mb-2">Cho Thuê Xe Vận Chuyển</h4>
                 <p className="text-gray-600 text-sm">Cung cấp dịch vụ cho thuê xe ô tô, xe tải để hỗ trợ vận chuyển nội thất trong nội thành và liên tỉnh một cách an toàn.</p>
              </div>
           </div>
        </div>

        {/* Chính Sách Đảm Bảo */}
        <div>
           <h2 className="text-3xl font-serif text-brand-dark mb-8">Chính Sách Đảm Bảo</h2>
           <div className="bg-brand-bg/50 p-8 h-full rounded-sm border border-brand-primary/10">
              <ul className="space-y-8">
                <li>
                   <h4 className="text-lg font-bold text-brand-dark flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-brand-primary"></div>
                     Cam Kết Gỗ Thật 100%
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Đền bù 200% giá trị đơn hàng nếu phát hiện sản phẩm không đúng chủng loại gỗ đã cam kết trên hợp đồng mua bán.</p>
                </li>
                <li>
                   <h4 className="text-lg font-bold text-brand-dark flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-brand-primary"></div>
                     Bảo Hành Lên Đến 5 Năm
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Chúng tôi cam kết bảo hành từ 1 đến 5 năm đối với tất cả các sản phẩm gỗ tự nhiên khi có bất kỳ sai sót nào thuộc về kỹ thuật chế tác.</p>
                </li>
                <li>
                   <h4 className="text-lg font-bold text-brand-dark flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-brand-primary"></div>
                     Bảo Trì Trọn Đời
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Huy Hào sẽ luôn đồng hành cùng quý khách bằng dịch vụ bảo dưỡng, đánh bóng, phủ sơn lại sản phẩm trong suốt quá trình sử dụng.</p>
                </li>
                <li>
                   <h4 className="text-lg font-bold text-brand-dark flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 bg-brand-primary"></div>
                     Đổi Trả Trong 7 Ngày
                   </h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Chính sách 1 đổi 1 trong vòng 7 ngày nếu lỗi từ nhà sản xuất giúp quý khách hoàn toàn an tâm khi mua sắm tại showroom của chúng tôi.</p>
                </li>
              </ul>
           </div>
        </div>
      </div>

    </div>
  );
}
