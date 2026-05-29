export type Role = 'SUPER_ADMIN' | 'BRANCH_ADMIN';
export type Branch = 'PUSAT' | 'CABANG_A' | 'CABANG_B' | 'CABANG_C' | 'CABANG_D';

export interface User {
  name: string;
  role: Role;
  branch?: Branch;
}

export type OrderStatus = 'PENDING' | 'PROCESSING' | 'READY' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;
  customerName: string;
  branch: Branch;
  items: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  deadline: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
}
