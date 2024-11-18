export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  products?: Array<{
    id: string;
    text: string;
    price: number;
    image: string;
  }>;
  isTrackingPrompt?: boolean;
  isProductList?: boolean;
}

export interface QuickReply {
  id: string;
  text: string;
  response: string;
}