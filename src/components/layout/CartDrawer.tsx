import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-serif">Giỏ hàng</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>Giỏ hàng của bạn đang trống</p>
                  <Link
                    to="/products"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors inline-block"
                  >
                    Tiếp tục mua sắm
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm text-brand-dark line-clamp-2">
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{formatPrice(item.product.price)}</p>
                        
                        <div className="mt-auto flex items-center gap-3">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between mb-4 text-lg">
                  <span className="font-medium text-gray-600">Tổng cộng:</span>
                  <span className="font-semibold font-serif text-brand-secondary">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-4">* Phí vận chuyển được tính ở bước thanh toán</p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-brand-dark text-white py-4 rounded-md text-center font-medium hover:bg-black transition-colors flex items-center justify-center"
                >
                  Tiến hành thanh toán
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
