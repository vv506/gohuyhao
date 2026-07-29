import { ShieldCheck, Truck, RefreshCw, Lock } from 'lucide-react';

export function Policy() {
  return (
    <div className="pt-48 pb-24 bg-brand-bg min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Chính Sách & Quy Định</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Cam kết mang đến trải nghiệm mua sắm an tâm và tin cậy nhất cho khách hàng của Huy Hào.</p>
        </div>

        <div className="space-y-16">
          
          {/* Warranty Policy */}
          <section className="bg-white p-8 md:p-12 border border-brand-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-brand-dark">Chính Sách Bảo Hành</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Huy Hào cam kết bảo hành các sản phẩm nội thất do lỗi kỹ thuật từ nhà sản xuất:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-brand-dark">Thời gian bảo hành:</strong> Lên đến 5 năm đối với các sản phẩm gỗ tự nhiên nguyên khối và 2 năm với sản phẩm gỗ công nghiệp cao cấp.</li>
                <li><strong className="text-brand-dark">Điều kiện bảo hành:</strong> Sản phẩm còn trong thời hạn bảo hành. Hư hỏng do lỗi kỹ thuật sản xuất (nứt nẻ mộng gỗ, bung keo, lỗi bản lề).</li>
                <li><strong className="text-brand-dark">Không bảo hành:</strong> Các trường hợp hư hỏng do tác động vật lý, hóa lý từ bên ngoài (trầy xước, cháy, ngấm nước kéo dài), hoặc bảo quản sai quy cách.</li>
              </ul>
              <p>Mạng lưới bảo trì của chúng tôi sẵn sàng hỗ trợ quý khách ngay tại nhà trong vòng 48 giờ kể từ khi nhận được yêu cầu.</p>
            </div>
          </section>

          {/* Shipping Policy */}
          <section className="bg-white p-8 md:p-12 border border-brand-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-brand-secondary"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-brand-secondary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-brand-dark">Chính Sách Giao Hàng & Lắp Đặt</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-brand-dark">Miễn phí giao hàng:</strong> Tại nội thành TP.HCM và Hà Nội với mọi đơn hàng trên 10.000.000 VNĐ.</li>
                <li><strong className="text-brand-dark">Lắp đặt miễn phí:</strong> Đội ngũ thợ mộc lành nghề sẽ giao hàng và lắp ráp hoàn thiện tận nơi cho các phòng ngủ, phòng khách, bếp.</li>
                <li><strong className="text-brand-dark">Thời gian giao hàng:</strong> Từ 3-5 ngày đối với sản phẩm có sẵn. Riêng sản phẩm thiết kế đặt riêng sẽ mất 15-30 ngày phụ thuộc vào độ phức tạp của bản vẽ.</li>
              </ul>
              <p>Mọi quy trình đóng gói và vận chuyển đều được bọc mút lót chống sốc, cam kết an toàn tuyệt đối 100%.</p>
            </div>
          </section>

          {/* Return Policy */}
          <section className="bg-white p-8 md:p-12 border border-brand-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-dark"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-brand-dark" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-brand-dark">Chính Sách Đổi Trả</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Quý khách có quyền kiểm tra hàng khi nhận bàn giao từ thợ. Nếu sản phẩm giao không đúng thiết kế, kích thước hoặc chất liệu đã cam kết, chúng tôi sẽ:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-brand-dark">1 Đổi 1:</strong> Trong vòng 7 ngày đầu tiên nếu phát hiện lỗi từ xưởng sản xuất.</li>
                <li>Sản phẩm đổi trả phải nguyên vẹn, không có dấu hiệu đã qua sử dụng và chưa bị can thiệp sửa chữa.</li>
                <li><strong>Lưu ý:</strong> Chúng tôi không hỗ trợ đổi trả vì lý do đổi ý hoặc không phù hợp thẩm mỹ cá nhân đối với mặt hàng thiết kế đặt riêng.</li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white p-8 md:p-12 border border-brand-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gray-400"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-brand-dark">Bảo Mật Thông Tin</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Sự riêng tư của quý khách là ưu tiên hàng đầu của chúng tôi. Chúng tôi cam kết tuyệt đối:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Không mua bán, trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào.</li>
                <li>Dữ liệu khách hàng (địa chỉ, số điện thoại) chỉ được sử dụng trong việc liên hệ giao hàng, bảo trì sản phẩm, hoặc gửi thông báo khuyến mãi (nếu được sự đồng ý).</li>
                <li>Toàn bộ thông tin hồ sơ của khách hàng đều được mã hóa trên hệ thống máy chủ nội bộ an toàn.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
