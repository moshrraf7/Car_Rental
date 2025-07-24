import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Users, Calendar, DollarSign, Eye } from "lucide-react";

// Mock data - will be replaced with Supabase data
const mockBookings = [
  {
    id: "1",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    customerPhone: "+1-234-567-8900",
    carName: "Tesla Model S",
    pickupDate: "2024-01-15",
    returnDate: "2024-01-20",
    pickupLocation: "Downtown Airport",
    returnLocation: "Downtown Airport",
    totalPrice: 750,
    status: "confirmed",
    createdAt: "2024-01-10"
  },
  {
    id: "2",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    customerPhone: "+1-234-567-8901",
    carName: "BMW X5",
    pickupDate: "2024-01-18",
    returnDate: "2024-01-22",
    pickupLocation: "City Center",
    returnLocation: "City Center",
    totalPrice: 600,
    status: "pending",
    createdAt: "2024-01-12"
  },
  {
    id: "3",
    customerName: "Mike Johnson",
    customerEmail: "mike@example.com",
    customerPhone: "+1-234-567-8902",
    carName: "Audi A4",
    pickupDate: "2024-01-20",
    returnDate: "2024-01-25",
    pickupLocation: "Airport Terminal 1",
    returnLocation: "Airport Terminal 1",
    totalPrice: 500,
    status: "completed",
    createdAt: "2024-01-14"
  }
];

const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1-234-567-8900",
    joinDate: "2024-01-01",
    totalBookings: 3,
    totalSpent: 2250
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1-234-567-8901",
    joinDate: "2024-01-05",
    totalBookings: 2,
    totalSpent: 1100
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1-234-567-8902",
    joinDate: "2024-01-10",
    totalBookings: 1,
    totalSpent: 500
  }
];

export const AdminDashboard = () => {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalBookings = mockBookings.length;
  const totalRevenue = mockBookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
  const totalUsers = mockUsers.length;
  const pendingBookings = mockBookings.filter(b => b.status === "pending").length;

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your car rental business</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBookings}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingBookings}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="bookings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Car</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.customerName}</div>
                          <div className="text-sm text-muted-foreground">{booking.customerEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>{booking.carName}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{booking.pickupDate}</div>
                          <div className="text-muted-foreground">to {booking.returnDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>${booking.totalPrice}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Bookings</TableHead>
                    <TableHead>Total Spent</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                      <TableCell>{user.totalBookings}</TableCell>
                      <TableCell>${user.totalSpent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Booking Details Modal would go here */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <Button
                variant="outline"
                className="absolute top-4 right-4"
                onClick={() => setSelectedBooking(null)}
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Customer Information</h4>
                  <p><strong>Name:</strong> {selectedBooking.customerName}</p>
                  <p><strong>Email:</strong> {selectedBooking.customerEmail}</p>
                  <p><strong>Phone:</strong> {selectedBooking.customerPhone}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Booking Details</h4>
                  <p><strong>Car:</strong> {selectedBooking.carName}</p>
                  <p><strong>Total:</strong> ${selectedBooking.totalPrice}</p>
                  <p><strong>Status:</strong> {selectedBooking.status}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Rental Period</h4>
                <p><strong>Pickup:</strong> {selectedBooking.pickupDate} at {selectedBooking.pickupLocation}</p>
                <p><strong>Return:</strong> {selectedBooking.returnDate} at {selectedBooking.returnLocation}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};