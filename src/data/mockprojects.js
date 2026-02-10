
import { ProjectStatus } from '../type/type.js';

export const MOCK_PROJECTS = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    clientName: 'Global Retail Corp',
    status: ProjectStatus.ACTIVE,
    startDate: '2023-10-01',
    endDate: '2024-03-31',
    budget: 125000,
    description: 'Complete overhaul of the mobile and desktop shopping experience.',
    manager: 'Sarah Jenkins'
  },
  {
    id: '2',
    name: 'Cloud Infrastructure Migration',
    clientName: 'TechFlow Solutions',
    status: ProjectStatus.COMPLETED,
    startDate: '2023-05-15',
    endDate: '2023-09-20',
    budget: 85000,
    description: 'Moving legacy on-premise servers to AWS with high availability setup.',
    manager: 'Michael Chen'
  },
  {
    id: '3',
    name: 'AI-Powered Analytics Dashboard for Marketing Teams with Advanced Real-time Reporting Capabilities',
    clientName: 'MarketMaster Inc',
    status: ProjectStatus.ON_HOLD,
    startDate: '2024-01-10',
    budget: 45000,
    description: 'Developing a predictive model for consumer behavior analysis.',
    manager: 'Elena Rodriguez'
  },
  {
    id: '4',
    name: 'Internal HR Portal',
    clientName: 'Internal',
    status: ProjectStatus.ACTIVE,
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    budget: 32000,
    description: 'A new self-service portal for employee benefits and payroll.',
    manager: 'David Smith'
  },
  {
    id: '5',
    name: 'Mobile Banking App v3',
    clientName: 'First National Bank',
    status: ProjectStatus.ACTIVE,
    startDate: '2023-11-20',
    endDate: '2024-05-15',
    budget: 210000,
    description: 'Adding biometric security and crypto wallet integration.',
    manager: 'Lisa Wong'
  },
  {
    id: '6',
    name: 'Supply Chain Tracker',
    clientName: 'Logistics Pro',
    status: ProjectStatus.COMPLETED,
    startDate: '2023-01-05',
    endDate: '2023-08-12',
    budget: 72000,
    description: 'Real-time GPS tracking for freight shipments.',
    manager: 'James Carter'
  },
  {
    id: '7',
    name: 'Customer CRM Integration',
    clientName: 'SalesBoost',
    status: ProjectStatus.ON_HOLD,
    startDate: '2024-03-01',
    budget: 15000,
    description: 'Connecting Salesforce with proprietary database.',
    manager: 'Sarah Jenkins'
  }
];
