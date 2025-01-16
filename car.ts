export default {
    name: 'car',
    type: 'document',
    title: 'Car',
    fields: [
      { 
        name: 'name', 
        type: 'string', 
        title: 'Car Name' 
      },
      { 
        name: 'type', 
        type: 'string', 
        title: 'Car Type', 
        options: { 
          list: ['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Sport'] 
        } 
      },
      { 
        name: 'pricePerDay', 
        type: 'number', 
        title: 'Price Per Day' 
      },
      { 
        name: 'capacity', 
        type: 'number', 
        title: 'Seating Capacity' 
      },
      { 
        name: 'fuelType', 
        type: 'string', 
        title: 'Fuel Type', 
        options: { 
          list: ['Petrol', 'Diesel', 'Electric', 'Hybrid'] 
        } 
      },
      { 
        name: 'availability', 
        type: 'boolean', 
        title: 'Availability' 
      },
      { 
        name: 'tags', 
        type: 'array', 
        of: [{ type: 'string' }], 
        title: 'Tags (e.g., Luxury, Economy)' 
      },
      { 
        name: 'image', 
        type: 'image', 
        title: 'Car Image' 
      },
    ],
  };
  