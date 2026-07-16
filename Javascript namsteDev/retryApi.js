function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function retryApi(apiFunction, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);

      const result = await apiFunction();

      return result;
    } catch (error) {
      lastError = error;

      console.log(`Attempt ${attempt} failed`);

      if (attempt < maxRetries) {
        await sleep(delay);
      }
    }
  }

  throw lastError;
}
