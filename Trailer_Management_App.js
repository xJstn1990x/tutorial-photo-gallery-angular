import React, { useState } from 'react';



// Create an array of trailer objects
let trailers = [
    { id: 9640, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9641, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9642, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9643, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9644, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9645, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9646, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9647, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9648, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9649, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9650, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9651, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9652, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9653, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9654, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9655, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9656, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9657, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9658, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9659, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9660, Type: 'Dry Van', Size: "53'", Location: 'Unknown'},
    { id: 9661, Type: 'Dry Van', Size: "53'", Location: 'Unknown'}
  ];
  
  // Function to display all trailers in the inventory
  function displayTrailers() {
    console.log('Trailer Inventory:');
    console.log('------------------');
    trailers.forEach(trailer => {
      console.log(`ID: ${trailer.id}, Size: ${trailer.Size}, Status: ${trailer.status}, Location: ${trailer.Location}`);
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
  

  displayTrailers(); // Display all trailers in the inventory
  updateTrailerStatus(2, 'Available'); // Update the status of trailer 2 to 'Available'
  displayTrailers(); // Display all trailers in the inventory again
  