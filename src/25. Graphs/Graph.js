class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let g = new Graph();
g.addVertex("Tokyo");
// Double addVertex not working
g.addVertex("Tokyo");

g.addVertex("San Francisco");
g.addVertex("Dallas");
g.addVertex("Aspen");

g.addEdge("Dallas", "Aspen");

console.log(g);
