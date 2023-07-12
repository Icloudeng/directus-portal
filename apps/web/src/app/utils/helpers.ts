export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @param date: string
 * @param string locale
 *
 * @return [type]
 */
export function toLocaleDateString(date: string, locale = 'en-US') {
  console.log(date);

  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatIsoDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
}

export function formatDate(dateString: string | number | Date) {
  dateString = new Date(dateString).toISOString().slice(0, 10);

  const dateParts = dateString.split('-');
  const year = dateParts[0];
  const month = MONTHS[parseInt(dateParts[1]) - 1];
  const day = parseInt(dateParts[2]);

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}
