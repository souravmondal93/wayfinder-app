class PriorityQueue {
  values;

  constructor() {
    // Initialize an empty array to hold data
    this.values = [];
  }

  enqueue(val, priority) {
    // 1. Push to queue
    this.values.push({ val, priority });
    // 2. Sort the queue
    this.sort();
  }

  dequeue() {
    // Unshift from queue
    return this.values.shift();
  }

  sort() {
    // Sort based on priority
    this.values.sort((a, b) => (a.priority - b.priority));
  }
}
