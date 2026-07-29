import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, Search, User, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_PRODUCTS, MAIN_CATEGORIES } from '../../data';
import { formatPrice } from '../../lib/utils';

const NAV_LINKS = [
  { name: 'Trang Chủ', path: '/' },
  { 
    name: 'Sản Phẩm', 
    path: '/products',
    submenu: MAIN_CATEGORIES.map(mc => ({
      name: mc.name,
      path: `/products?category=${mc.slug}`,
      subItems: (mc.subcategories || []).map(sc => ({
        name: sc.name,
        path: `/products?category=${sc.slug}`
      }))
    }))
  },
  { name: 'Tin Tức', path: '/news' },
  { name: 'Báo Giá', path: '/pricing' },
  { name: 'Giới Thiệu', path: '/about' },
  { name: 'Liên Hệ', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const searchSuggestions = searchQuery.trim() 
    ? MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname, location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-brand-primary/10',
          isScrolled || isMobileMenuOpen 
            ? 'bg-brand-bg/90 backdrop-blur-md py-4' 
            : 'bg-brand-bg/80 backdrop-blur-md py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50 flex items-center h-16 w-32 md:w-40 py-2">
              <img src="/img/logo.jpg" alt="Huy Hào Logo" className="h-full w-full object-contain object-left" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <div key={link.path} className="relative group py-6">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-[11px] uppercase tracking-widest font-semibold transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left",
                      location.pathname === link.path ? "text-brand-primary after:scale-x-100" : "text-brand-dark/60 hover:text-brand-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                  
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-64 z-50">
                      <div className="bg-white border border-brand-primary/10 shadow-xl py-2 flex flex-col">
                        {link.submenu.map(subItem => (
                          <div key={subItem.path} className="relative group/sub">
                            <Link 
                              to={subItem.path}
                              className="px-6 py-3 text-xs font-medium text-brand-dark hover:text-brand-primary hover:bg-brand-bg transition-colors flex items-center justify-between"
                            >
                              <span>{subItem.name}</span>
                              {subItem.subItems && subItem.subItems.length > 0 && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                              )}
                            </Link>
                            
                            {subItem.subItems && subItem.subItems.length > 0 && (
                              <div className="absolute top-0 left-full -ml-1 pl-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 w-56 z-50">
                                <div className="bg-white border border-brand-primary/10 shadow-xl py-2 flex flex-col">
                                  {subItem.subItems.map(nestedItem => (
                                    <Link 
                                      key={nestedItem.path} 
                                      to={nestedItem.path}
                                      className="px-6 py-3 text-xs font-medium text-brand-dark hover:text-brand-primary hover:bg-brand-bg transition-colors"
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-5 relative z-50 text-brand-dark">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-brand-secondary transition-colors hidden sm:block"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              <Link to={user ? "/account" : "/login"} className="hover:text-brand-secondary transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-brand-secondary transition-colors"
                aria-label="Giỏ hàng"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden hover:text-brand-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar - Desktop */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-24 left-0 right-0 z-30 bg-white border-b border-brand-primary/10 shadow-sm hidden sm:block overflow-visible"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
              <form onSubmit={handleSearch} className="flex relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm nội thất..." 
                  className="w-full text-lg border-b-2 border-brand-dark py-3 pr-12 outline-none focus:border-brand-primary transition-colors text-brand-dark placeholder:text-gray-400"
                  autoFocus
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-dark hover:text-brand-primary">
                  <Search className="w-6 h-6" />
                </button>
              </form>
              
              {searchSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-100 shadow-xl rounded-b-md z-40 mx-4 sm:mx-6 lg:mx-8 max-h-[60vh] overflow-y-auto">
                  <ul>
                    {searchSuggestions.map((product) => (
                      <li key={product.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                        <Link 
                          to={`/product/${product.id}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-4 p-4"
                        >
                          <div className="w-16 h-16 bg-gray-100 flex-shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-brand-dark font-medium text-sm">{product.name}</h4>
                            <p className="text-brand-primary font-bold text-sm mt-1">{formatPrice(product.price)}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={handleSearch}
                    className="w-full py-3 text-center text-sm text-brand-primary hover:text-brand-dark hover:bg-gray-50 font-medium transition-colors border-t border-gray-100"
                  >
                    Xem tất cả kết quả cho "{searchQuery}"
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-24 px-4 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.path} className="border-b border-gray-100 pb-4">
                  <Link
                    to={link.path}
                    className="text-2xl font-serif text-brand-dark block"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="flex flex-col mt-4 pl-4 gap-4 border-l border-gray-200 ml-2">
                      {link.submenu.map(subItem => (
                        <div key={subItem.path}>
                          <Link 
                            to={subItem.path}
                            className="text-lg font-medium text-brand-dark block"
                          >
                            {subItem.name}
                          </Link>
                          {subItem.subItems && subItem.subItems.length > 0 && (
                            <div className="flex flex-col mt-2 pl-4 gap-3 border-l border-gray-100 ml-2">
                              {subItem.subItems.map(nestedItem => (
                                <Link 
                                  key={nestedItem.path} 
                                  to={nestedItem.path}
                                  className="text-base text-gray-600 hover:text-brand-primary block"
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <div className="relative w-full mb-4">
                  <form onSubmit={handleSearch} className="flex relative w-full">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm kiếm sản phẩm..." 
                      className="w-full text-base border-b border-gray-300 py-2 pr-10 outline-none focus:border-brand-primary transition-colors text-brand-dark"
                    />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-dark hover:text-brand-primary">
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                  
                  {searchSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 shadow-md rounded-md z-40 max-h-60 overflow-y-auto w-full">
                      <ul>
                        {searchSuggestions.map((product) => (
                          <li key={product.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                            <Link 
                              to={`/product/${product.id}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 p-3"
                            >
                              <div className="w-12 h-12 bg-gray-100 flex-shrink-0">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h4 className="text-brand-dark font-medium text-xs line-clamp-1">{product.name}</h4>
                                <p className="text-brand-primary font-bold text-xs mt-1">{formatPrice(product.price)}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={handleSearch}
                        className="w-full py-2 text-center text-xs text-brand-primary font-medium hover:bg-gray-50 transition-colors"
                      >
                        Tất cả kết quả "{searchQuery}"
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <Link to={user ? "/account" : "/login"} className="flex flex-1 items-center gap-2 px-4 py-2 bg-gray-100 rounded-md justify-center">
                    <User className="w-5 h-5 cursor-pointer" />
                    <span>{user ? "Tài khoản" : "Đăng nhập"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
