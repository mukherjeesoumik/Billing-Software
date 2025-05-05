import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";

const Customers = () => {
  return (
    <Card className="w-full bg-white/5 text-gray-200">
      <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent flex items-center justify-between mb-4">
        <div>
          <Typography variant="h4" color="white">
            Customers
          </Typography>
          <Typography className="text-gray-400 mt-1 font-normal">
            Manage your customer information
          </Typography>
        </div>
        <div>
          <Button className="flex items-center gap-3" size="sm">
            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Customer
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-0 pt-0">
        {/* Placeholder for Customer Table/List */}
        <div className="p-4 border-t border-gray-700">
          <Typography className="text-gray-400">
            Customer list or table will be displayed here.
          </Typography>
          {/* TODO: Implement actual customer list/table component */}
        </div>
      </CardBody>
    </Card>
  );
};

export default Customers; 