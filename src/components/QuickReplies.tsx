import React from 'react';
import { motion } from 'framer-motion';
import { QuickReply } from '../types/chat';

interface Props {
  replies: QuickReply[];
  onSelect: (reply: QuickReply) => void;
}

export default function QuickReplies({ replies, onSelect }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 mt-4"
    >
      {replies.map((reply) => (
        <button
          key={reply.id}
          onClick={() => onSelect(reply)}
          className="px-4 py-2 text-sm bg-white text-blue-500 rounded-full border border-blue-200 
                   hover:bg-blue-50 transition-colors duration-200"
        >
          {reply.text}
        </button>
      ))}
    </motion.div>
  );
}