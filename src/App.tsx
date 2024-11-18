import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import QuickReplies from './components/QuickReplies';
import { quickReplies, handleProductList, getProductDetails, getOrderStatus } from './data/chatRules';
import { ChatMessage as ChatMessageType } from './types/chat';

function App() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '0',
      type: 'bot',
      content: 'Hello! How can I help you today? Please select a topic below.'
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickReplySelect = (reply: typeof quickReplies[0]) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content: reply.text
    };

    let botMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: reply.response
    };

    if (reply.text === 'Show all products') {
      botMessage.products = handleProductList();
      botMessage.isProductList = true;
    } else if (reply.text === 'Track my order') {
      botMessage.isTrackingPrompt = true;
    }

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleProductClick = (productId: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content: `Show details for product ${productId}`
    };

    const botMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: getProductDetails(productId)
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleTrackingSubmit = (trackingId: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      type: 'user',
      content: `Track order: ${trackingId}`
    };

    const botMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: getOrderStatus(trackingId)
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 p-4 flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-white" />
            <h1 className="text-lg font-semibold text-white">E-commerce Assistant</h1>
          </div>

          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message}
                onProductClick={handleProductClick}
                onTrackingSubmit={handleTrackingSubmit}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t bg-white">
            <QuickReplies
              replies={quickReplies}
              onSelect={handleQuickReplySelect}
            />
          </div>
        </div>

        {/* Attribution */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Powered by Rule-based Chat Engine
        </p>
      </div>
    </div>
  );
}

export default App;