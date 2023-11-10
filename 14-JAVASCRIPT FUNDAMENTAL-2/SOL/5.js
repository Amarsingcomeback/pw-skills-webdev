function createGuestList(guests) {
    let guestList = "The guests are: ";
  
    for (let i = 0; i < guests.length; i++) {
      guestList += guests[i];
      
      if (i < guests.length - 1) {
        guestList += ", ";
      }
    }
  
    return guestList;
  }
  
  // Example usage:
  const guestNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David"
  ];
  
  const sentence = createGuestList(guestNames);
  console.log(sentence);
  console.log(typeof sentence);
  