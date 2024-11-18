import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types/chat';
import ProductList from './ProductList';

interface Props {
  message: ChatMessageType;
  onProductClick: (productId: string) => void;
  onTrackingSubmit: (trackingId: string) => void;
}

export default function ChatMessage({ message, onProductClick, onTrackingSubmit }: Props) {
  const isBot = message.type === 'bot';
  const [trackingId, setTrackingId] = React.useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
        isBot ? 'bg-blue-500' : 'bg-gray-600'
      }`}>
        {isBot ? <Bot className="h-5 w-5 text-white" /> : <User className="h-5 w-5 text-white" />}
      </div>
      <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
        isBot ? 'bg-white text-gray-800' : 'bg-blue-500 text-white'
      }`}>
        <div className="whitespace-pre-wrap">{message.content}</div>
        
        {message.products && (
          <ProductList 
            products={message.products} 
            onProductClick={onProductClick}
          />
        )}

        {message.isTrackingPrompt && (
          <div className="mt-2">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking/order ID"
              className="w-full p-2 rounded border text-gray-800"
            />
            <button
              onClick={() => {
                if (trackingId.trim()) {
                  onTrackingSubmit(trackingId);
                  setTrackingId('');
                }
              }}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Track Order
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}