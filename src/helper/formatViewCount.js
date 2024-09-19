function formatViewCount(viewCount) {
  if (viewCount >= 1e9) {
    return (viewCount / 1e9).toFixed(1) + "B"; // Billions
  } else if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1) + "M"; // Millions
  } else if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(1) + "K"; // Thousands
  } else {
    return viewCount.toString(); // Less than 1,000
  }
}

// Example usage:
export default formatViewCount;
