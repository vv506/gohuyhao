import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password);
      
      if (user) {
        login({ id: user.id, name: user.name, email: user.email, phone: user.phone, address: user.address, gender: user.gender, dob: user.dob });
        navigate('/account');
      } else {
        setError('Email/Số điện thoại hoặc mật khẩu không chính xác.');
      }
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen font-sans flex bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-serif font-bold text-brand-dark mb-4 tracking-tight">Đăng Nhập</h1>
            <p className="text-gray-500 text-sm">Vui lòng đăng nhập để tiếp tục trải nghiệm mua sắm và theo dõi đơn hàng của bạn.</p>
          </div>
          
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm border border-red-100 rounded-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Email / Số điện thoại *</label>
              <input 
                type="text" 
                required 
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                placeholder="Nhập email hoặc số điện thoại" 
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest">Mật khẩu *</label>
                <a href="#" className="text-xs text-brand-primary hover:underline transition-colors">Quên mật khẩu?</a>
              </div>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                placeholder="Nhập mật khẩu" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-dark text-white hover:bg-brand-primary transition-colors py-4 uppercase tracking-widest font-bold text-xs disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Đang Đăng Nhập...' : 'Đăng Nhập'}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="text-brand-primary font-bold hover:underline transition-colors">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
      
      <div className="hidden lg:block w-1/2 relative bg-brand-bg">
        <img 
          src="/img/bosofa1.jpg" 
          alt="Đăng nhập tài khoản Huy Hào" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-brand-dark/40"></div>
        <div className="absolute inset-0 flex items-center p-16">
           <div className="max-w-xl text-white">
              <h2 className="text-4xl font-serif mb-6 leading-tight">Chào mừng bạn trở lại</h2>
              <p className="text-white/80 leading-relaxed font-light text-lg">Tiếp tục khám phá và hoàn thiện không gian sống mơ ước của bạn với những kiệt tác nội thất độc bản từ Huy Hào.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
