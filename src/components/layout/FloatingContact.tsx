import { Phone, Facebook, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone */}
      <motion.a 
        href="tel:0909515712"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          0909515712
        </span>
      </motion.a>

      {/* Facebook */}
      <motion.a 
        href="https://www.facebook.com/share/18Hr2QT4pi/" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group"
      >
        <Facebook className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Facebook
        </span>
      </motion.a>

      {/* Zalo (Using a custom styling or fallback icon) */}
      <motion.a 
        href="https://zalo.me/0909515712" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-blue-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group"
      >
        <span className="font-bold text-sm">Zalo</span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat Zalo
        </span>
      </motion.a>
    </div>
  );
}
