export function isDataValid(data) {
  for (const key in data) {
    if (
      Array.isArray(data[key]) ||
      (typeof data[key] === 'object' && Object.keys(data[key]).length === 0) ||
      data[key] === ''
    ) {
      return false;
    }
  }
  return true;
}
