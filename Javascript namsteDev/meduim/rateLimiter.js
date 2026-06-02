function rateLimiter(requests, limit, windowSize) {
  if (!requests || requests.length === 0) {
    return [];
  }
  // these are request this is
  // max 3 request allowed in 2 sec widowsize if limit = 3 and winsowsize=2

  let queue = [];
  let result = [];

  for (let i = 0; i < requests.length; i++) {
    let currentTime = requests[i];

    while (queue.length && currentTime - queue[0] >= windowSize) {
      queue.shift();
    }

    if (queue.length < limit) {
      queue.push(requests[i]);
      result.push(i);
    }
  }

  console.log(queue, result);
  return result;
}

rateLimiter([1, 2, 3, 4, 5], 1, 2);

module.exports = { rateLimiter };
