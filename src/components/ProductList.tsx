import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  text: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
  onProductClick: (productId: string) => void;
}

export default function ProductList({ products, onProductClick }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
          onClick={() => onProductClick(product.id)}
        >
          <img 
            src={product.image} 
            alt={product.text}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-gray-800">{product.text}</h3>
            <p className="text-blue-500 font-semibold">${product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}