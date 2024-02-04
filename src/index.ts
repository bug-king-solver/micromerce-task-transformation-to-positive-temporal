type PositiveTemporal =
  | { days: string }
  | { weeks: string }
  | { months: string }
  | { years: string }
  | { hours: string }
  | { minutes: string };

function toPositiveTemporal(amount: string, unit: string, nonNegative?: boolean | 'nonNegative'): PositiveTemporal | string {
  const numericAmount = parseInt(amount, 10);
  if (isNaN(numericAmount)) {
    return 'The amount must be a number.';
  }

  if (numericAmount === 0 && !nonNegative) {
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  }

  const lowerCaseUnit = unit.toLowerCase().trim();
  switch (lowerCaseUnit) {
    case 'm':
    case 'month':
    case 'months':
      return { months: amount };
    case 'd':
    case 'day':
    case 'days':
      return { days: amount };
    case 'w':
    case 'week':
    case 'weeks':
      return { weeks: amount };
    case 'y':
    case 'year':
    case 'years':
      return { years: amount };
    default:
      return 'Unsupported unit: ' + unit;
  }
}

export default toPositiveTemporal;
