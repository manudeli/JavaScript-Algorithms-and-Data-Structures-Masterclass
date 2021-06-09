class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.adjacencyList["Tokyo"].push("Something");
// Double addVertex not working
g.addVertex("Tokyo");
g.addVertex("San Francisco");

console.log(g);
