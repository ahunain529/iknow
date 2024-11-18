import { products, orders } from './database';

export const quickReplies = [
  {
    id: '1',
    text: 'Show all products',
    response: 'Here are our available products:'
  },
  {
    id: '2',
    text: 'Track my order',
    response: 'Please enter your tracking number or order ID:'
  },
  {
    id: '3',
    text: 'Shipping information',
    response: 'We offer free standard shipping (3-5 business days) for orders over $50. Express shipping (1-2 business days) is available for $12.99.'
  },
  {
    id: '4',
    text: 'Payment methods',
    response: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.'
  },
  {
    id: '5',
    text: 'Return policy',
    response: 'We offer a 30-day return policy for all unused items in original packaging. Simply initiate a return from your account or contact our support team.'
  }
];

export const handleProductList = () => {
  return products.map(p => ({
    id: p.id,
    text: p.name,
    price: p.price,
    image: p.image
  }));
};

export const getProductDetails = (productId: string) => {
  const product = products.find(p => p.id === productId);
  if (!product) return 'Product not found';
  return `
${product.name}
Price: $${product.price}
${product.description}
Category: ${product.category}
Stock: ${product.stock} units available
`;
};

export const getOrderStatus = (trackingId: string) => {
  const order = orders.find(o => 
    o.id === trackingId || o.trackingNumber === trackingId
  );
  
  if (!order) return 'Order not found. Please check your tracking number or order ID.';
  
  return `
Order Status: ${order.status.toUpperCase()}
Order Date: ${order.orderDate}
Tracking Number: ${order.trackingNumber}
Total Amount: $${order.totalAmount}
Shipping Address: ${order.shippingAddress}

Products:
${order.products.map(p => {
  const product = products.find(prod => prod.id === p.productId);
  return `- ${product?.name} (Qty: ${p.quantity})`;
}).join('\n')}
`;
};