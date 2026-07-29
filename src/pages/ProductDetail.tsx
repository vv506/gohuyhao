import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MOCK_PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { ArrowLeft, ChevronRight, Minus, Plus, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || '');
  const [selectedMaterial, setSelectedMaterial] = useState(product?.materials?.[0] || '');

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-2xl font-serif mb-4">Không tìm thấy sản phẩm</h2>
        <button onClick={() => navigate('/products')} className="text-brand-secondary underline">
          Quay lại cửa hàng
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-48 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-brand-dark">Trang chủ</button>
        <ChevronRight className="w-4 h-4" />
        <button onClick={() => navigate('/products')} className="hover:text-brand-dark">Sản phẩm</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-brand-dark">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="aspect-square bg-gray-100 rounded-sm overflow-hidden"
          >
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 ${activeImage === idx ? 'border-brand-secondary' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-sm text-brand-secondary uppercase tracking-widest font-medium mb-3">{product.category}</p>
          <h1 className="text-4xl lg:text-5xl font-serif text-brand-dark mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl font-medium text-brand-dark">
              {formatPrice((product.sizePrices && selectedSize) ? product.sizePrices[selectedSize] : product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice((product.sizePrices && selectedSize) ? product.sizePrices[selectedSize] * 1.25 : product.originalPrice)}
              </span>
            )}
          </div>

          <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
            {(product.longDescription || product.description).split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4 py-6 border-y border-gray-200 mb-8">
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <span className="text-sm text-gray-500 block">Kích thước</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm transition-colors ${selectedSize === size ? 'border-brand-primary bg-brand-primary/5 text-brand-primary font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <span className="text-sm text-gray-500 block">Màu sắc: <span className="text-brand-dark font-medium">{selectedColor}</span></span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${selectedColor === color.name ? 'border-brand-primary scale-110 shadow-sm' : 'border-transparent hover:scale-105 shadow-sm'}`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.materials && product.materials.length > 0 && (
              <div className="space-y-2">
                <span className="text-sm text-gray-500 block">Chất liệu</span>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-4 py-2 border text-sm transition-colors ${selectedMaterial === mat ? 'border-brand-primary bg-brand-primary/5 text-brand-primary font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!(product.sizes || product.colors || product.materials) && (
              <>
                <div className="grid grid-cols-3 text-sm">
                    <span className="text-gray-500">Chất liệu</span>
                    <span className="col-span-2 text-brand-dark font-medium">{product.material}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                    <span className="text-gray-500">Kích thước</span>
                    <span className="col-span-2 text-brand-dark font-medium">{product.dimensions}</span>
                </div>
              </>
            )}
            <div className="grid grid-cols-3 text-sm pt-2">
                <span className="text-gray-500">Tình trạng</span>
                <span className="col-span-2 font-medium text-green-600">{product.inStock ? 'Còn hàng' : 'Hết hàng'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-sm h-12">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-medium pointer-events-none">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-brand-dark text-white h-12 rounded-sm hover:bg-brand-primary transition-colors font-medium text-lg uppercase tracking-wider text-sm"
            >
              Thêm Vào Giỏ Hàng
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto">
             <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm">
               <Truck className="w-5 h-5 text-brand-secondary" />
               <span className="text-sm font-medium text-brand-dark">Giao hàng toàn quốc</span>
             </div>
             <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm">
               <ShieldCheck className="w-5 h-5 text-brand-secondary" />
               <span className="text-sm font-medium text-brand-dark">Bảo hành 5 năm</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
