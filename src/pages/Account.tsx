import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Save, Shield, MapPin, Phone, Mail, Calendar, KeyRound } from 'lucide-react';

export function Account() {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'profile' | 'security'>('profile');

  // Profile states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Security states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [securityMessage, setSecurityMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setName(user.name);
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setGender(user.gender || '');
      setDob(user.dob || '');
    }
  }, [user, navigate]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsUpdatingProfile(true);
    setTimeout(() => {
      updateUser({ ...user, name, email, phone, address, gender, dob });
      setIsUpdatingProfile(false);
      alert('Cập nhật thông tin thành công!');
    }, 1000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setSecurityMessage({ type: '', text: '' });
    
    if (newPassword !== confirmNewPassword) {
      setSecurityMessage({ type: 'error', text: 'Mật khẩu xác nhận không khớp.' });
      return;
    }

    setIsUpdatingPassword(true);
    setTimeout(() => {
      setIsUpdatingPassword(false);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const dbUserIndex = users.findIndex((u: any) => u.id === user.id);
      
      if (dbUserIndex > -1) {
        if (users[dbUserIndex].password !== currentPassword) {
          setSecurityMessage({ type: 'error', text: 'Mật khẩu hiện tại không chính xác.' });
        } else {
          users[dbUserIndex].password = newPassword;
          localStorage.setItem('users', JSON.stringify(users));
          setSecurityMessage({ type: 'success', text: 'Đổi mật khẩu thành công!' });
          setCurrentPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
        }
      }
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white border border-brand-primary/20 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-brand-dark p-6 text-center">
                <div className="w-20 h-20 bg-brand-primary rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white/10">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-serif font-bold text-white mb-1">{user.name}</h2>
                <p className="text-white/60 text-xs tracking-wider">{user.email || user.phone}</p>
              </div>
              <div className="p-4">
                <nav className="space-y-2">
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'profile' ? 'bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary' : 'text-brand-dark hover:bg-gray-50'}`}
                  >
                    <User className="w-4 h-4" /> Hồ sơ của tôi
                  </button>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'security' ? 'bg-brand-primary/10 text-brand-primary border-l-2 border-brand-primary' : 'text-brand-dark hover:bg-gray-50'}`}
                  >
                    <Shield className="w-4 h-4" /> Bảo mật
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest text-red-600 hover:bg-red-50 transition-colors mt-8"
                  >
                    <LogOut className="w-4 h-4" /> Đăng xuất
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white border border-brand-primary/20 shadow-xl rounded-sm p-8 md:p-10">
              
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-dark mb-2">Hồ sơ của tôi</h2>
                  <p className="text-gray-500 text-sm mb-8 pb-6 border-b border-gray-100">Quản lý thông tin cá nhân để bảo mật tài khoản và nhận ưu đãi tốt nhất.</p>

                  <form onSubmit={handleUpdateProfile} className="space-y-6 max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                          <User className="w-3 h-3 text-brand-primary" /> Họ Tên
                        </label>
                        <input 
                          type="text" 
                          required 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Phone className="w-3 h-3 text-brand-primary" /> Số điện thoại
                        </label>
                        <input 
                          type="tel" 
                          required 
                          pattern="^(01|02|03|05|07|08|09)[0-9]{8}$"
                          title="Số điện thoại phải gồm 10 số và bắt đầu bằng 01, 02, 03, 05, 07, 08 hoặc 09"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border-b border-gray-300 py-2.5 outline-none transition-colors bg-transparent text-sm text-gray-500" 
                          disabled
                        />
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Không thể thay đổi</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Mail className="w-3 h-3 text-brand-primary" /> Email
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        className="w-full border-b border-gray-300 py-2.5 outline-none transition-colors bg-transparent text-sm text-gray-500" 
                        disabled
                      />
                      <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Không thể thay đổi</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-brand-primary" /> Ngày sinh
                        </label>
                        <input 
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" 
                        />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-4">Giới tính</label>
                         <div className="flex gap-6">
                           <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" value="Nam" checked={gender === 'Nam'} onChange={(e) => setGender(e.target.value)} className="accent-brand-primary" />
                             <span className="text-sm">Nam</span>
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" value="Nữ" checked={gender === 'Nữ'} onChange={(e) => setGender(e.target.value)} className="accent-brand-primary" />
                             <span className="text-sm">Nữ</span>
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" value="Khác" checked={gender === 'Khác'} onChange={(e) => setGender(e.target.value)} className="accent-brand-primary" />
                             <span className="text-sm">Khác</span>
                           </label>
                         </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-brand-primary" /> Địa chỉ giao hàng mặc định
                      </label>
                      <input 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Nhập địa chỉ của bạn"
                        className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm" 
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isUpdatingProfile}
                        className="bg-brand-dark text-white hover:bg-brand-primary transition-colors py-3 px-8 uppercase tracking-widest font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Save className="w-4 h-4" />
                        {isUpdatingProfile ? 'Đang Lưu...' : 'Lưu Thay Đổi'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-dark mb-2">Đổi mật khẩu</h2>
                  <p className="text-gray-500 text-sm mb-8 pb-6 border-b border-gray-100">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác.</p>

                  {securityMessage.text && (
                    <div className={`mb-6 p-4 rounded-sm text-sm border ${securityMessage.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-700 border-green-100'}`}>
                      {securityMessage.text}
                    </div>
                  )}

                  <form onSubmit={handleUpdatePassword} className="space-y-6 max-w-lg">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                        <KeyRound className="w-3 h-3 text-brand-primary" /> Mật khẩu hiện tại *
                      </label>
                      <input 
                        type="password" 
                        required 
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                        placeholder="Nhập mật khẩu hiện tại"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                        <KeyRound className="w-3 h-3 text-brand-primary" /> Mật khẩu mới *
                      </label>
                      <input 
                        type="password" 
                        required 
                        pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$"
                        title="Mật khẩu phải có ít nhất 6 ký tự, gồm chữ hoa, số và ký tự đặc biệt"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                        placeholder="Tối thiểu 6 ký tự, gồm chữ hoa, số, ký tự đặc biệt"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2 flex items-center gap-2">
                        <KeyRound className="w-3 h-3 text-brand-primary" /> Xác nhận mật khẩu mới *
                      </label>
                      <input 
                        type="password" 
                        required 
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="w-full border-b border-gray-300 py-2.5 focus:border-brand-primary outline-none transition-colors bg-transparent text-sm placeholder:text-gray-400" 
                        placeholder="Nhập lại mật khẩu mới"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isUpdatingPassword}
                        className="bg-brand-dark text-white hover:bg-brand-primary transition-colors py-3 px-8 uppercase tracking-widest font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Shield className="w-4 h-4" />
                        {isUpdatingPassword ? 'Đang Xử Lý...' : 'Cập Nhật Mật Khẩu'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
