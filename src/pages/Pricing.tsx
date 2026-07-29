import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X } from 'lucide-react';

const PRICING_PLANS = [
  {
    name: 'Thiết Kế Đặt Riêng Phòng Khách',
    price: 'Từ 20.000.000đ',
    description: 'Thiết kế và thi công trọn gói Bộ Sofa, Kệ Tivi, Tủ Giày dựa trên mặt bằng và sở thích cá nhân của bạn.',
    features: [
      'Khảo sát và đo đạc không gian thực tế',
      'Bản phác thảo & 3D độc quyền',
      'Tùy biến vật liệu (gỗ óc chó, gỗ sồi...)',
      'Đã bao gồm chi phí lắp đặt tận nơi',
      'Bảo hành chất liệu lên đến 5 năm'
    ]
  },
  {
    name: 'Thiết Kế Đặt Riêng Phòng Ngủ',
    price: 'Từ 15.000.000đ',
    description: 'Cá nhân hóa Giường ngủ êm ái và Tủ quần áo kịch trần, tối ưu diện tích và trải nghiệm nghỉ ngơi.',
    features: [
      'Tư vấn concept & phong thủy phòng ngủ',
      'Sản xuất trực tiếp, không qua trung gian',
      'Thiết kế kết cấu chịu lực theo yêu cầu',
      'Đã bao gồm chi phí lắp đặt tận nơi',
      'Bảo trì trọn đời mộng gỗ, bản lề'
    ],
    highlight: true
  },
  {
    name: 'Thiết Kế Đặt Riêng Phòng Bếp',
    price: 'Từ 18.000.000đ',
    description: 'Tuyệt tác bàn ăn nguyên khối hay tủ bếp hiện đại, được đo ni đóng giày cho không gian giữ lửa của gia đình.',
    features: [
      'Tùy chỉnh form dáng bàn ăn (4-12 ghế)',
      'Phủ kỹ thuật sơn chống nước, chống xước',
      'Xử lý mép cạnh an toàn cho trẻ nhỏ',
      'Đã bao gồm chi phí lắp đặt tận nơi',
      'Cam kết bền vững, không cong vênh'
    ]
  }
];

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Gửi yêu cầu thành công!');
      handleCloseModal();
    }, 1500);
  };

  return (
    <div className="pt-48 pb-24 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Báo Giá Dịch Vụ & Tư Vấn Đặt Riêng</h1>
          <p className="text-brand-dark/70 text-lg leading-relaxed">
            Dưới đây là bảng báo giá cho các dịch vụ và báo giá cho mẫu tư vấn đặt riêng (đã bao gồm toàn bộ chi phí lắp đặt tận nơi). Xin vui lòng liên hệ chọn "Nhận Báo Giá Chi Tiết" để kiến trúc sư của chúng tôi lập dự toán chính xác nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex flex-col p-8 sm:p-10 border ${plan.highlight ? 'border-brand-primary bg-brand-bg/40' : 'border-gray-200 bg-white'} shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Được Ưa Chuộng Nhất
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">{plan.name}</h3>
              <p className="text-brand-primary text-xl font-medium mb-6">{plan.price}</p>
              <p className="text-brand-dark/70 text-sm leading-relaxed mb-8 h-16">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-brand-dark text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button onClick={handleOpenModal} className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors ${plan.highlight ? 'bg-brand-primary text-white hover:bg-brand-dark' : 'bg-brand-dark text-white hover:bg-brand-primary'}`}>
                Nhận Báo Giá Chi Tiết
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote Form Popup (Modal) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg p-8 shadow-2xl overflow-hidden rounded-sm border border-brand-primary/20"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Nhận Báo Giá Chi Tiết</h3>
                <p className="text-sm text-gray-500">Vui lòng để lại thông tin, chuyên gia nội thất của chúng tôi sẽ tư vấn phương án thi công tối ưu nhất.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-1">Họ Tên *</label>
                  <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" placeholder="Nhập tên của bạn" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-1">Số Điện Thoại *</label>
                  <input required type="tel" pattern="^(01|02|03|05|07|08|09)[0-9]{8}$" title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09" className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" placeholder="Nhập số điện thoại" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-1">Email *</label>
                  <input required type="email" pattern="^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$" title="Vui lòng nhập email hợp lệ" className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" placeholder="Nhập địa chỉ email" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-1">Hạng mục quan tâm</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm cursor-pointer">
                    <option>Thiết Kế Đặt Riêng Phòng Khách</option>
                    <option>Thiết Kế Đặt Riêng Phòng Ngủ</option>
                    <option>Thiết Kế Đặt Riêng Phòng Bếp</option>
                    <option>Dịch Vụ Tư Vấn Thiết Kế Khác</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button disabled={isSubmitting} type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-dark transition-colors py-3 text-sm font-bold uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Đang gửi đi...' : 'Gửi Yêu Cầu Báo Giá'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
