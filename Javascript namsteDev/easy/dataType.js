function detectType(value) {
  // Your implementation
  if (value == null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
