import { Button, Card, Divider, Modal, Tabs, Spin, notification } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Booking from "../../types/Booking"
import CarSelectionModal from '../../components/Booking/CarSelectionModal';


const OrderManagement = () => {
  const [activeKey, setActiveKey] = useState("IN_PROCESS");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);
  const [carCategoryId, setCarCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Group bookings by status
  const groupedBookings = bookings.reduce((acc, booking) => {
    acc[booking.status] = acc[booking.status] || [];
    acc[booking.status].push({
      status: booking.status,
      name: booking.carCategoryName,
      username: booking.customerName,
      date: `${new Date(booking.returnDate).getDate() - new Date(booking.startDate).getDate()} days`,
      fee: `${booking.totalPrice.toLocaleString()} USD`,
      bill: `${booking.totalPrice.toLocaleString()} USD`,
      start: new Date(booking.startDate).toLocaleDateString(),
      id: booking.id,
      carCategoryId: booking.carCategoryId
    });
    return acc;
  }, {} as Record<string, any[]>);

  // Define the desired order of tabs
  const tabOrder = ["IN_PROCESS", "APPROVED", "COMPLETED", "CANCELED"];

  const handleApprove = (bookingId: string, carCategoryId: string) => {
    setCurrentBookingId(bookingId);
    setCarCategoryId(carCategoryId);
    setIsModalVisible(true);
  };

  const handleCarSelect = (carId: string) => {
    // Optionally refresh bookings or handle any other logic after assigning the car
    console.log(`Car assigned: ${carId}`);
  };

  const handleCancel = async (bookingId: string) => {
    Modal.confirm({
      title: 'Confirm Cancellation',
      content: 'Are you sure you want to cancel this booking?',
      onOk: async () => {
        try {
          await axios.put(`http://localhost:8080/api/bookings/${bookingId}/cancel`);
          const response = await axios.get('http://localhost:8080/api/bookings');
          setBookings(response.data);
        } catch (error) {
          console.error('Error canceling booking:', error);
        }
      },
      onCancel() {
        console.log('Cancel operation cancelled');
      },
    });
  };

  const handleComplete = async (bookingId: string) => {
    try {
      await axios.post(`http://localhost:8080/api/bookings/${bookingId}/complete`);
      const response = await axios.get('http://localhost:8080/api/bookings');
      setBookings(response.data);

      // Show success notification
      notification.success({
        message: 'Success',
        description: 'The booking has been completed successfully.',
      });
    } catch (error) {
      console.error('Error completing booking:', error);

      // Show error notification
      notification.error({
        message: 'Error',
        description: 'There was an error completing the booking. Please try again.',
      });
    }
  };

  return (
    <div className="p-5">
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        {tabOrder.map(status => (
          <Tabs.TabPane tab={status} key={status}>
            {loading ? (
              <Spin size="large" />
            ) : (
              groupedBookings[status]?.map((order, index) => (
                <Card 
                  key={index} 
                  className="mb-5"
                  bodyStyle={{ padding: '16px' }}
                >
                  {/* Status header */}
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-600">
                      {order.status}
                    </span>
                  </div>
                  
                  <Divider className="my-3" />
                  
                  {/* Main content */}
                  <div className="flex">
                    <div className="flex-grow px-5">
                      <h3 className="text-xl font-bold text-blue-900">{order.name}</h3>
                      <p className="text-sm font-medium">Customer: {order.username}</p>
                      <p className="text-sm font-medium">Price: {order.fee}</p>
                      <p className="text-sm font-medium">Number of days: {order.date}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="mr-2">Total:</span>
                      <span className="text-xl font-bold">{order.bill}</span>
                    </div>
                  </div>
                  
                  <Divider className="my-3" />
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span>Start Date: </span>
                      <span>{order.start}</span>
                    </div>
                    
                    <div className="space-x-3">
                      <Button type="primary" className="bg-blue-500">
                        Details
                      </Button>
                      <Button>
                      Contact customer
                      </Button>
                      {status === 'IN_PROCESS' && (
                        <>
                          <Button type="primary" className="bg-green-500" onClick={() => handleApprove(order.id, order.carCategoryId)}>
                          Approve
                          </Button>
                          <Button danger onClick={() => handleCancel(order.id)}>
                            Cancel
                          </Button>
                        </>
                      )}
                      {status === 'APPROVED' && (
                        <>
                          <Button type="primary" className="bg-green-500" onClick={() => handleComplete(order.id)}>
                            Complete
                          </Button>
                          <Button danger onClick={() => handleCancel(order.id)}>
                            Cancel
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            )}
          </Tabs.TabPane>
        ))}
      </Tabs>

      <CarSelectionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelect={handleCarSelect}
        bookingId={currentBookingId!}
        carCategoryId={carCategoryId!}
      />
    </div>
  );
};

export default OrderManagement;
