export const date = (value) => {
  const currentDate = new Date();
  const postDate = new Date(value);

  // Calculate the difference in milliseconds
  const difference = currentDate - postDate;
  // Convert difference to days
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
  let relativeDateString;

  if (daysDifference === 0) {
    relativeDateString = "Today";
  } else if (daysDifference === 1) {
    relativeDateString = "Yesterday";
  } else {
    relativeDateString = `${daysDifference} days ago`;
  }
  return relativeDateString;
};
