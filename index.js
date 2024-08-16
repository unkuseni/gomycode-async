
// Task 01:
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(arr[i]);
  }
}


// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
async function awaitCall() {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'From API' });
    }, 1000);
  });
  console.log(response.data);
}


// Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
async function awaitCall() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('API call failed'));
      }, 1000);
    });
    console.log(response.data);
  } catch (error) {
    console.log('Oops! An error occurred:', error.message);
  }
}

// Task 04:
// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
async function chainedAsyncFunctions() {
  async function logAfterDelay(message) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(message);
  }

  await logAfterDelay('Starting');
  await logAfterDelay('Middle');
  await logAfterDelay('End');
}



// Task 04:
// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
async function concurrentRequests() {
  const [response1, response2] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Response 1' });
      }, 2000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Response 2' });
      }, 1000);
    })
  ]);
  console.log(response1.data, response2.data);
}


// Task 05:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
async function parallelCalls(urls) {
  const responses = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));
  console.log(responses);
}


