export function debounce(func, wait) {
  let timeout;

  return function (...args) {
    // Clear the previous timeout, preventing the function from being called too soon
    clearTimeout(timeout);
    
    // Set a new timeout to invoke the function after the specified `wait` period
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
