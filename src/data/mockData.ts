import { Branch, Customer, Order } from '../types';

export const BRANCHES: Branch[] = ['PUSAT', 'CABANG_A', 'CABANG_B', 'CABANG_C', 'CABANG_D'];

export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-001', customerName: 'PT. Maju Jaya', branch: 'PUSAT', items: 'Brosur x1000, Kartu Nama x500', total: 1500000, status: 'PROCESSING', createdAt: '2026-05-28T10:00:00Z', deadline: '2026-05-30T10:00:00Z' },
  { id: 'ORD-002', customerName: 'Budi Santoso', branch: 'CABANG_A', items: 'Spanduk 3x1m', total: 150000, status: 'PENDING', createdAt: '2026-05-29T08:00:00Z', deadline: '2026-05-31T08:00:00Z' },
  { id: 'ORD-003', customerName: 'Toko Sejahtera', branch: 'CABANG_B', items: 'Nota NCR 2 Rangkap x50', total: 750000, status: 'COMPLETED', createdAt: '2026-05-25T14:00:00Z', deadline: '2026-05-28T14:00:00Z' },
  { id: 'ORD-004', customerName: 'Dinas Pendidikan', branch: 'CABANG_C', items: 'Buku Panduan A4 x200', total: 5000000, status: 'PROCESSING', createdAt: '2026-05-27T09:00:00Z', deadline: '2026-06-05T09:00:00Z' },
  { id: 'ORD-005', customerName: 'Klinik Sehat', branch: 'PUSAT', items: 'X-Banner x2', total: 240000, status: 'READY', createdAt: '2026-05-28T11:00:00Z', deadline: '2026-05-29T17:00:00Z' },
  { id: 'ORD-006', customerName: 'Andi M', branch: 'CABANG_D', items: 'Stiker Vinyl x100', total: 100000, status: 'PENDING', createdAt: '2026-05-29T10:30:00Z', deadline: '2026-05-30T10:30:00Z' },
];

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'CUST-001', name: 'PT. Maju Jaya', phone: '081234567890', email: 'info@majujaya.co.id', totalOrders: 15, totalSpent: 25000000, lastOrderDate: '2026-05-28T10:00:00Z' },
  { id: 'CUST-002', name: 'Budi Santoso', phone: '081987654321', email: 'budi@gmail.com', totalOrders: 2, totalSpent: 450000, lastOrderDate: '2026-05-29T08:00:00Z' },
  { id: 'CUST-003', name: 'Toko Sejahtera', phone: '08111223344', email: 'toko.sejahtera@yahoo.com', totalOrders: 8, totalSpent: 6500000, lastOrderDate: '2026-05-25T14:00:00Z' },
  { id: 'CUST-004', name: 'Dinas Pendidikan', phone: '08555667788', email: 'pengadaan@dispendik.go.id', totalOrders: 5, totalSpent: 18000000, lastOrderDate: '2026-05-27T09:00:00Z' },
];

export const PERFORMANCE_DATA = [
  { name: 'Senin', PUSAT: 4000, 'CABANG_A': 2400, 'CABANG_B': 2400, 'CABANG_C': 1800, 'CABANG_D': 1500 },
  { name: 'Selasa', PUSAT: 3000, 'CABANG_A': 1398, 'CABANG_B': 2210, 'CABANG_C': 2000, 'CABANG_D': 1800 },
  { name: 'Rabu', PUSAT: 2000, 'CABANG_A': 9800, 'CABANG_B': 2290, 'CABANG_C': 2500, 'CABANG_D': 1400 },
  { name: 'Kamis', PUSAT: 2780, 'CABANG_A': 3908, 'CABANG_B': 2000, 'CABANG_C': 2100, 'CABANG_D': 1600 },
  { name: 'Jumat', PUSAT: 1890, 'CABANG_A': 4800, 'CABANG_B': 2181, 'CABANG_C': 2300, 'CABANG_D': 1900 },
  { name: 'Sabtu', PUSAT: 2390, 'CABANG_A': 3800, 'CABANG_B': 2500, 'CABANG_C': 2200, 'CABANG_D': 1800 },
  { name: 'Minggu', PUSAT: 3490, 'CABANG_A': 4300, 'CABANG_B': 2100, 'CABANG_C': 2400, 'CABANG_D': 1700 },
];
