// Product Database
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
}

export interface Order {
  id: string;
  customerId: string;
  products: Array<{
    productId: string;
    quantity: number;
  }>;
  status: 'processing' | 'shipped' | 'delivered';
  trackingNumber: string;
  orderDate: string;
  totalAmount: number;
  shippingAddress: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    stock: 50
  },
  {
    id: "p2",
    name: "Smart Fitness Watch",
    price: 149.99,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    stock: 30
  },
  {
    id: "p3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    stock: 100
  }
];

export const orders: Order[] = [
  {
    id: "ORD001",
    customerId: "CUST001",
    products: [{ productId: "p1", quantity: 1 }],
    status: "shipped",
    trackingNumber: "TRK123456",
    orderDate: "2024-03-10",
    totalAmount: 199.99,
    shippingAddress: "123 Main St, City, Country"
  },
  {
    id: "ORD002",
    customerId: "CUST002",
    products: [{ productId: "p2", quantity: 1 }, { productId: "p3", quantity: 2 }],
    status: "processing",
    trackingNumber: "TRK789012",
    orderDate: "2024-03-12",
    totalAmount: 209.97,
    shippingAddress: "456 Oak St, City, Country"
  }
];