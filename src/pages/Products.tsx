import { useState } from 'react';
import { MOCK_PRODUCTS, CATEGORIES, MAIN_CATEGORIES } from '../data';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';
  const { addToCart } = useCart();
  
  const maxPrice = Math.max(...MOCK_PRODUCTS.map(p => p.price));
  const [priceRange, setPriceRange] = useState(maxPrice);
  const [sortOrder, setSortOrder] = useState('featured');

  const activeCategory = categoryFromUrl;

  let filteredProducts = MOCK_PRODUCTS;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  
  if (activeCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => {
      const mainCategoryMatch = MAIN_CATEGORIES.find(mc => mc.slug === activeCategory);
      if (mainCategoryMatch) {
        const subcategoryNames = mainCategoryMatch.subcategories?.map(sc => sc.name) || [];
        if (subcategoryNames.length === 0) {
          return p.category === mainCategoryMatch.name;
        }
        return subcategoryNames.includes(p.category);
      }
      
      return CATEGORIES.find(c => c.name === p.category)?.slug === activeCategory || p.category === activeCategory;
    });
  }

  filteredProducts = filteredProducts.filter(p => p.price <= priceRange);

  if (sortOrder === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-48 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Bộ Sưu Tập Nội Thất</h1>
        <p className="text-gray-500 max-w-2xl">Khám phá hàng trăm sản phẩm nội thất cao cấp được thiết kế và chế tác tỉ mỉ, phù hợp với mọi không gian sống.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sidebar Filters (1/3) */}
        <div className="md:col-span-1">
          <div className="sticky top-32 space-y-12">
            
            {/* Lọc Theo Giá */}
            <div>
              <h3 className="font-serif text-xl border-b border-gray-200 pb-3 mb-6 font-semibold text-brand-dark">Lọc Theo Giá</h3>
              <div className="space-y-4">
                <input 
                  type="range" 
                  min="0" 
                  max={maxPrice} 
                  step="1000000"
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between items-center text-sm font-medium text-gray-600">
                  <span>0đ</span>
                  <span className="text-brand-primary">{formatPrice(priceRange)}</span>
                </div>
              </div>
            </div>

            {/* Danh Mục */}
            <div>
              <h3 className="font-serif text-xl border-b border-gray-200 pb-3 mb-6 font-semibold text-brand-dark">Danh Mục</h3>
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={() => setSearchParams(new URLSearchParams())}
                    className={`text-sm tracking-wide flex items-center justify-between w-full group ${activeCategory === 'All' ? 'text-brand-primary font-bold' : 'text-gray-500 hover:text-brand-dark font-medium'}`}
                  >
                    <span>Tất cả Sản Phẩm</span>
                  </button>
                </li>
                {MAIN_CATEGORIES.map(mainCat => (
                  <li key={mainCat.id}>
                    <button 
                      onClick={() => setSearchParams({ category: mainCat.slug })}
                      className={`text-sm font-bold ${mainCat.subcategories && mainCat.subcategories.length > 0 ? 'mb-3' : 'mb-0'} uppercase tracking-wider text-left w-full hover:text-brand-primary transition-colors ${activeCategory === mainCat.slug ? 'text-brand-primary' : 'text-brand-dark'}`}
                    >
                      {mainCat.name}
                    </button>
                    {mainCat.subcategories && mainCat.subcategories.length > 0 && (
                      <ul className="space-y-3 pl-3">
                        {mainCat.subcategories.map(cat => (
                          <li key={cat.id}>
                            <button 
                              onClick={() => setSearchParams({ category: cat.slug })}
                              className={`text-sm tracking-wide flex items-center justify-between w-full group ${activeCategory === cat.slug ? 'text-brand-primary font-bold' : 'text-gray-500 hover:text-brand-dark font-medium'}`}
                            >
                              <span>{cat.name}</span>
                              <span className={`text-xs ${activeCategory === cat.slug ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`}>—</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Product Grid (2/3) */}
        <div className="md:col-span-2">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <span className="text-sm text-gray-500">{filteredProducts.length} sản phẩm</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sắp xếp:</span>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="text-sm border-none bg-transparent focus:outline-none font-medium text-brand-dark cursor-pointer"
              >
                <option value="featured">Nổi bật</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/products/${product.slug}`} className="block relative overflow-hidden rounded-sm aspect-[4/5] mb-4 bg-gray-100">
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10 shadow-md">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                     <button 
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className="w-full bg-white text-brand-dark py-3 rounded-sm text-sm font-medium hover:bg-brand-secondary hover:text-white transition-colors"
                      >
                        Thêm Vào Giỏ
                      </button>
                  </div>
                </Link>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-serif text-lg leading-snug">
                    <Link to={`/products/${product.slug}`} className="hover:text-brand-secondary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-brand-dark">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">Không tìm thấy sản phẩm nào phù hợp.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
