export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const determineTime = seconds => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8)
}