export function fillZero(value: number) {
  if (value < 10) {
    return `${value}`.padStart(2, '0');
  }

  return `${value}`;
}
