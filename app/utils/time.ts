export function createDateFromTimeString(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number); // Split and convert to numbers

  if (!hours || !minutes) {
    return new Date()
  }

  // Get the current date and time
  const now = new Date();

  // Set the hours and minutes of the 'now' Date object
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(0); // Set seconds to 0 to be precise
  now.setMilliseconds(0); // Set milliseconds to 0

  return now;
}

export function createDateStringFromDate(date: Date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}