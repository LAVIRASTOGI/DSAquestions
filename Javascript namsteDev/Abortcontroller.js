async function fetchUsers() {
  const controller = new AbortController();

  // Abort after 5 seconds
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetch("https://api.example.com/users", {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("API request was aborted");
      return;
    }

    console.log("API failed:", error.message);
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchUsers();