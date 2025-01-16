export default {
    name: 'booking',
    type: 'document',
    title: 'Booking',
    fields: [
      { 
        name: 'customerId', 
        type: 'reference', 
        to: [{ type: 'customer' }], 
        title: 'Customer ID' 
      },
      { 
        name: 'carId', 
        type: 'reference', 
        to: [{ type: 'car' }], 
        title: 'Car ID' 
      },
      { 
        name: 'pickupDate', 
        type: 'datetime', 
        title: 'Pickup Date' 
      },
      { 
        name: 'dropoffDate', 
        type: 'datetime', 
        title: 'Drop-off Date' 
      },
      { 
        name: 'totalPrice', 
        type: 'number', 
        title: 'Total Price' 
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Booking Status', 
        options: { 
          list: ['Pending', 'Confirmed', 'Completed', 'Cancelled'] 
        } 
      },
      { 
        name: 'timestamp', 
        type: 'datetime', 
        title: 'Booking Time' 
      },
    ],
  };
  