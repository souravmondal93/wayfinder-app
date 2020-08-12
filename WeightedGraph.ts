class WeightedGraph {
  adjacencyList;

  constructor() {
      // Create empty object to hold weighted graph called adjacencyList
      this.adjacencyList = {};
  }

  addVertex(vertex) {
    // If `vertex` not in adjacencyList, add vertex
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}