import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../lib/utils';
import { ArrowLeft, CreditCard, Landmark, QrCode, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Checkout() {
  const { cart, cartTotal, removeFromCart, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    note: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank' | 'qr'>('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsCartOpen(false); // Close cart drawer if open
    
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        note: ''
      });
    }
  }, [user, setIsCartOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // We should ideally clear the cart here, but useCart doesn't have a clearCart method right now.
      // We can iterate and remove or just leave it for the sake of demo, or add clearCart.
      cart.forEach(item => removeFromCart(item.product.id));
      
      setTimeout(() => {
        navigate('/products');
      }, 5000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-brand-bg flex items-center justify-center font-sans">
        <div className="max-w-md w-full bg-white p-8 md:p-12 text-center shadow-xl border border-brand-primary/20 rounded-sm">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Đặt hàng thành công!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Cảm ơn bạn đã mua sắm tại Huy Hào. Đơn hàng của bạn đang được xử lý và sẽ sớm được giao đến bạn.
          </p>
          <div className="text-sm text-gray-500 mb-8 p-4 bg-gray-50 rounded-sm">
            Mã đơn hàng: <span className="font-bold text-brand-dark">#HH{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <Link 
            to="/products" 
            className="inline-block w-full py-4 bg-brand-dark text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-primary transition-colors"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-brand-bg min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-brand-dark hover:text-brand-primary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-10">Thanh toán</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-12 text-center shadow-sm border border-brand-primary/10 rounded-sm">
            <p className="text-gray-500 mb-6">Giỏ hàng của bạn đang trống.</p>
            <Link to="/products" className="inline-block px-8 py-3 bg-brand-dark text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-primary transition-colors">
              Quay lại cửa hàng
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column: Form & Payment */}
            <div className="w-full lg:w-3/5 space-y-10">
              
              {/* Shipping Information */}
              <section className="bg-white p-6 md:p-8 shadow-sm border border-brand-primary/10 rounded-sm">
                <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Thông tin giao hàng</h2>
                
                {!user && (
                  <p className="text-sm text-gray-500 mb-6">
                    Đã có tài khoản? <Link to="/login" className="text-brand-primary font-bold hover:underline">Đăng nhập</Link> để thanh toán nhanh hơn.
                  </p>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Họ tên *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors text-sm placeholder:text-gray-400"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors text-sm placeholder:text-gray-400"
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        pattern="^(01|02|03|05|07|08|09)[0-9]{8}$"
                        title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors text-sm placeholder:text-gray-400"
                        placeholder="0912 345 678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Địa chỉ giao hàng *</label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      pattern="^.*,.*,.*$"
                      title="Vui lòng nhập địa chỉ cụ thể và đầy đủ, ngăn cách bằng dấu phẩy (VD: Số nhà Tên Đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố)"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors text-sm placeholder:text-gray-400"
                      placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Ghi chú đơn hàng (Tùy chọn)</label>
                    <textarea 
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border-b border-gray-300 py-2 focus:border-brand-primary outline-none transition-colors text-sm placeholder:text-gray-400 resize-none"
                      placeholder="Ghi chú về thời gian giao hàng, chỉ dẫn địa chỉ..."
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-6 md:p-8 shadow-sm border border-brand-primary/10 rounded-sm">
                <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Phương thức thanh toán</h2>
                
                <div className="space-y-4">
                  
                  {/* COD */}
                  <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="w-4 h-4 text-brand-primary accent-brand-primary"
                      />
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <CreditCard className="w-5 h-5 text-brand-dark" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-dark text-sm">Thanh toán khi nhận hàng (COD)</h3>
                        <p className="text-xs text-gray-500 mt-1">Khách hàng thanh toán bằng tiền mặt khi nhận hàng.</p>
                      </div>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'bank' ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="bank"
                        checked={paymentMethod === 'bank'}
                        onChange={() => setPaymentMethod('bank')}
                        className="w-4 h-4 text-brand-primary accent-brand-primary"
                      />
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Landmark className="w-5 h-5 text-brand-dark" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-dark text-sm">Chuyển khoản trực tiếp qua ngân hàng</h3>
                        <p className="text-xs text-gray-500 mt-1">Thực hiện thanh toán vào tài khoản ngân hàng của chúng tôi.</p>
                      </div>
                    </div>
                    {/* Bank Transfer Details expanding if selected */}
                    <AnimatePresence>
                      {paymentMethod === 'bank' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-brand-primary/20 text-sm text-gray-600 bg-white p-4 rounded-sm">
                            <p className="mb-2"><strong>Ngân hàng:</strong> Vietcombank (VCB)</p>
                            <p className="mb-2"><strong>Chủ tài khoản:</strong> NGUYEN HUY HAO</p>
                            <p className="mb-2"><strong>Số tài khoản:</strong> 0123456789</p>
                            <p className="text-brand-primary mt-3 text-xs">* Vui lòng ghi chú mã đơn hàng trong nội dung chuyển khoản.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </label>

                  {/* QR Code */}
                  <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'qr' ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="qr"
                        checked={paymentMethod === 'qr'}
                        onChange={() => setPaymentMethod('qr')}
                        className="w-4 h-4 text-brand-primary accent-brand-primary"
                      />
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <QrCode className="w-5 h-5 text-brand-dark" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-dark text-sm">Thanh toán qua mã QR (Momo / VNPay / ZaloPay)</h3>
                        <p className="text-xs text-gray-500 mt-1">Quét mã QR từ ứng dụng ngân hàng hoặc ví điện tử để thanh toán.</p>
                      </div>
                    </div>
                    <AnimatePresence>
                      {paymentMethod === 'qr' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-brand-primary/20 text-center">
                             <div className="w-48 h-48 bg-gray-100 mx-auto border border-gray-200 flex items-center justify-center p-2 mb-3">
                                {/* Dummy QR code representation */}
                                <div className="w-full h-full border-4 border-brand-dark relative p-2 flex flex-wrap gap-1 content-start justify-start opacity-70">
                                   <div className="w-6 h-6 bg-brand-dark absolute top-1 left-1"></div>
                                   <div className="w-6 h-6 bg-brand-dark absolute top-1 right-1"></div>
                                   <div className="w-6 h-6 bg-brand-dark absolute bottom-1 left-1"></div>
                                   {Array.from({ length: 40 }).map((_, i) => (
                                     <div key={i} className={`bg-brand-dark ${i % 3 === 0 ? 'w-2 h-2' : (i % 5 === 0 ? 'w-4 h-2' : 'w-2 h-4')} ${i % 2 === 0 ? 'ml-2' : 'mt-1'}`}></div>
                                   ))}
                                </div>
                             </div>
                             <p className="text-xs text-gray-500">Mã QR sẽ hết hạn sau <span className="font-bold text-brand-dark">15:00</span> phút</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </label>

                </div>
              </section>
            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white p-6 md:p-8 shadow-sm border border-brand-primary/10 rounded-sm sticky top-28">
                <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Tóm tắt đơn hàng</h2>
                
                <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-100 shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-brand-dark text-sm font-medium line-clamp-2">{item.product.name}</h4>
                        <p className="text-gray-500 text-xs mt-1">SL: {item.quantity}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-brand-primary font-bold text-sm">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tạm tính</span>
                    <span className="font-medium text-brand-dark">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Phí vận chuyển</span>
                    <span className="font-medium text-green-600">Miễn phí</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-brand-dark uppercase text-sm tracking-widest">Tổng cộng</span>
                    <span className="font-bold text-brand-primary text-2xl">{formatPrice(cartTotal)}</span>
                  </div>
                  <p className="text-right text-[10px] text-gray-400 mt-1 uppercase tracking-wider">(Đã bao gồm VAT)</p>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing || cart.length === 0}
                  className="w-full py-4 bg-brand-dark text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      ĐANG XỬ LÝ...
                    </span>
                  ) : 'HOÀN TẤT ĐẶT HÀNG'}
                </button>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
