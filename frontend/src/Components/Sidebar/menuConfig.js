import {Dashboard,Task,BuyerMeeting,QuickCosting, PreOrderCosting, StyleLibrary, Requisitions, BuyerPurchase, Inventory, SampleDevelopment, Production, MasterAdmin,Users,Showroom, Shipment,KPI,InvoiceBill,Reports,Settings, MasterData} from '../../assets/Icons/SideIcons/SideIcons';


export const menuItems = [
  { name: 'Dashboard', icon: Dashboard },
  { name: 'Tasks', icon: Task },
  { name: 'Buyer Meeting', icon: BuyerMeeting },
  { name: 'Quick Costing', icon: QuickCosting },
  { name: 'Pre Order Costing', icon: PreOrderCosting },
  { name: 'Style Library', icon: StyleLibrary },
  { name: 'Requisitions', icon: Requisitions, hasSub: true },
  { name: 'Buyer Purchase', icon: BuyerPurchase, hasSub: true },
  { name: 'Inventory', icon: Inventory, hasSub: true },
  { name: 'Sample Development', icon: SampleDevelopment, hasSub: true },
  { name: 'Production', icon: Production, hasSub: true },
  { name: 'Master Admin', icon: MasterAdmin, hasSub: true },
  { name: 'Users', icon: Users, hasSub: true },
  { name: 'Showroom', icon: Showroom, hasSub: true },
  { name: 'Shipment', icon: Shipment, hasSub: true },
  { name: "KPI's", icon: KPI, hasSub: true },
  { name: 'E-Invoice/E-Way Bill', icon: InvoiceBill },
  { name: 'Reports', icon: Reports },
  { name: 'Master Data', icon: MasterData, hasSub: true },
  { name: 'Setting', icon: Settings, hasSub: true },
];
