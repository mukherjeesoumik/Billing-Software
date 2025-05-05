import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
  UserPlusIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import HeroSection from "@/components/HeroSection";

// Placeholder data - replace with actual data fetching later
const summaryData = {
  totalRevenue: "₹1,25,430.00",
  totalInvoices: 152,
  totalCustomers: 85,
  outstandingPayments: "₹18,950.50",
};

const recentActivity = [
  { id: 1, description: "Invoice #INV-0151 created for Customer A", time: "2 hours ago" },
  { id: 2, description: "Payment of ₹5,000 recorded for Invoice #INV-0148", time: "5 hours ago" },
  { id: 3, description: "New customer 'Customer B' added", time: "1 day ago" },
  { id: 4, description: "Invoice #INV-0150 sent to Customer C", time: "2 days ago" },
];

// Reusable Card Component with animation
function SummaryCard({ icon: Icon, title, value, color }) {
  return (
    <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <CardBody className="text-center p-6">
        <Icon className={`w-10 h-10 mx-auto mb-4 text-${color}-500`} />
        <Typography variant="h6" color="blue-gray" className="mb-1 font-normal text-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="font-semibold">
          {value}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <div className="mt-12 px-4">
        {/* Summary Cards - Added transition-all, hover effects */}
        <div className="mb-12 grid gap-y-8 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard 
            icon={CurrencyDollarIcon} 
            title="Total Revenue" 
            value={summaryData.totalRevenue} 
            color="green" 
          />
          <SummaryCard 
            icon={DocumentDuplicateIcon} 
            title="Total Invoices" 
            value={summaryData.totalInvoices} 
            color="blue" 
          />
          <SummaryCard 
            icon={UsersIcon} 
            title="Total Customers" 
            value={summaryData.totalCustomers} 
            color="purple" 
          />
          <SummaryCard 
            icon={ExclamationCircleIcon} 
            title="Outstanding Payments" 
            value={summaryData.outstandingPayments} 
            color="red" 
          />
        </div>

        {/* Quick Action Buttons - Added transition-all, hover effects */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center md:justify-start">
          <Button 
            color="blue" 
            className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            <PlusCircleIcon strokeWidth={2.5} className="h-5 w-5" /> Create Invoice
          </Button>
          <Button 
            color="green" 
            className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            <UserPlusIcon strokeWidth={2.5} className="h-5 w-5" /> Add Customer
          </Button>
          <Button 
            color="orange" 
            className="flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            <BanknotesIcon strokeWidth={2.5} className="h-5 w-5" /> Record Payment
          </Button>
        </div>

        {/* Recent Activity Log - Improved styling, added hover effect */} 
        <div className="mb-4">
          <Card className="shadow-sm border border-gray-200">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-4 font-semibold">
                Recent Activity
              </Typography>
              <div className="divide-y divide-gray-100">
                {recentActivity.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="py-3 px-2 flex justify-between items-center transition-colors duration-200 hover:bg-gray-50 rounded-md"
                  >
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      {activity.description}
                    </Typography>
                    <Typography variant="small" color="gray" className="text-xs whitespace-nowrap ml-4">
                      {activity.time}
                    </Typography>
                  </div>
                ))}
              </div>
              {/* TODO: Add link to view all activity - Style as a subtle link/button */}
              <div className="text-right mt-4">
                <Button variant="text" size="sm" color="blue-gray" className="text-xs">
                   View All Activity
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
