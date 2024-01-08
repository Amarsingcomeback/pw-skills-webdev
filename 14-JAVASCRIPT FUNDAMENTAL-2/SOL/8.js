function daysUntilEvent(eventStartDate) {
  // Get the current date
  const currentDate = new Date();

  // Parse the event start date
  const parsedEventStartDate = new Date(eventStartDate);

  // Calculate the time difference in milliseconds
  const timeDifference = parsedEventStartDate.getTime() - currentDate.getTime();

  // Convert the time difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}
// Example usage:
const eventStartDate = "2024-01-01"; // Replace this with the actual start date of your event
const daysRemaining = daysUntilEvent(eventStartDate);

console.log(`There are ${daysRemaining} days until the event starts.`);
