import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((u: any) => u.email === email || u.phone === phone);
      
      if (existingUser) {
        setError('Email hoặc số điện thoại này đã được đăng ký.');
      } else {
        const newUser = { id: uuidv4(), name, email, phone, password, address: '', gender: '', dob: '' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        login({ id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone, address: '', gender: '', dob: '' });
        navigate('/account');
      }
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen font-sans flex bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-serif font-bold text-brand-dark mb-4 tracking-tight">Tạo tài khoản</h1>
            <p className="text-gray-500 text-sm">Điền thông tin bên dưới để đăng ký tài khoản thành viên Huy Hào, nhận ngay những ưu đãi độc quyền.</p>
          </div>
          
          {error && <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm border border-red-100 rounded-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Họ Tên *</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                placeholder="Nhập họ và tên của bạn" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Email *</label>
                <input 
                  type="email" 
                  required 
                  pattern="^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$"
                  title="Vui lòng nhập email hợp lệ"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                  placeholder="name@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Số điện thoại *</label>
                <input 
                  type="tel" 
                  required 
                  pattern="^(01|02|03|05|07|08|09)[0-9]{8}$" 
                  title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                  placeholder="0912 345 678" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Mật khẩu *</label>
              <input 
                type="password" 
                required 
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$"
                title="Mật khẩu phải có ít nhất 6 ký tự, gồm chữ hoa, số và ký tự đặc biệt"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                placeholder="Tối thiểu 6 ký tự, gồm chữ hoa, số và ký tự đặc biệt" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Xác nhận mật khẩu *</label>
              <input 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                placeholder="Nhập lại mật khẩu" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-dark text-white hover:bg-brand-primary transition-colors mt-6 py-4 uppercase tracking-widest font-bold text-xs disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Đang Xử Lý...' : 'Đăng Ký Tài Khoản'}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Đã có tài khoản?{' '}
            <Link to="/login" className="text-brand-primary font-bold hover:underline transition-colors">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
      
      <div className="hidden lg:block w-1/2 relative bg-brand-bg">
        <img 
          src="/img/giuong4.jpg" 
          alt="Đăng ký tài khoản Huy Hào" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-brand-dark/40"></div>
        <div className="absolute inset-0 flex items-center p-16">
           <div className="max-w-xl text-white">
              <h2 className="text-4xl font-serif mb-6 leading-tight">Gia nhập cộng đồng tinh hoa của Huy Hào</h2>
              <p className="text-white/80 leading-relaxed font-light text-lg">Trải nghiệm mua sắm nội thất đẳng cấp, theo dõi đơn hàng dễ dàng và nhận các đặc quyền dành riêng cho khách hàng thân thiết.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
