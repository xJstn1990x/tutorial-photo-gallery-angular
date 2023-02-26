// Create an array of trailer objects
let trailers = [
    { id: 1, type: 'Dry Van', size: '53ft', status: 'Available', location: 'Warehouse 1' },
    { id: 2, type: 'Reefer', size: '48ft', status: 'In Use', location: 'Customer A' },
    { id: 3, type: 'Flatbed', size: '45ft', status: 'Scheduled for Maintenance', location: 'Maintenance Shop' }
  ];
  
  // Function to display all trailers in the inventory
  function displayTrailers() {
    console.log('Trailer Inventory:');
    console.log('------------------');
    trailers.forEach(trailer => {
      console.log(`ID: ${trailer.id}, Type: ${trailer.type}, Size: ${trailer.size}, Status: ${trailer.status}, Location: ${trailer.location}`);
    });
    console.log('');
  }
  
  // Function to find a trailer by ID
  function findTrailerById(id) {
    return trailers.find(trailer => trailer.id === id);
  }
  
  // Function to update the status of a trailer
  function updateTrailerStatus(id, newStatus) {
    let trailer = findTrailerById(id);
    if (trailer) {
      trailer.status = newStatus;
      console.log(`Trailer ${id} status updated to ${newStatus}`);
    } else {
      console.log(`Trailer ${id} not found in inventory`);
    }
  }
  
  // Example usage:
  displayTrailers(); // Display all trailers in the inventory
  updateTrailerStatus(2, 'Available'); // Update the status of trailer 2 to 'Available'
  displayTrailers(); // Display all trailers in the inventory again
  