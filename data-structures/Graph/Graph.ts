import { Queue } from "../Queue/Queue";

class Vertex {
  label: string;
  visited: boolean;

  constructor(label: string) {
    this.label = label;
    this.visited = false;
  }

  public toString() {
    return this.label;
  }
}

class Graph {
  vertices: Vertex[];
  edges: number;
  adjacent: Array<Vertex[]>;

  constructor(vertices: Vertex[]) {
    this.vertices = vertices;
    this.edges = 0;
    this.adjacent = [];

    for (let i = 0; i < vertices.length; i++) {
      this.adjacent[i] = [];
    }
  }

  public addEdge(v: Vertex, w: Vertex) {
    const vIndex = this.vertices.indexOf(v);
    const wIndex = this.vertices.indexOf(w);

    if (vIndex !== -1 && wIndex !== -1) {
      this.adjacent[vIndex].push(w);
      this.adjacent[wIndex].push(v);

      this.edges++;
    }
  }

  public showGraph() {
    for (let i = 0; i < this.vertices.length; ++i) {
      console.log(`${this.vertices[i].toString()} -> `);

      for (let j = 0; j < this.vertices.length; ++j) {
        if (this.adjacent[i][j] !== undefined)
          console.log(`${this.adjacent[i][j].toString()}`);
      }
    }
  }

  public depthFirstSearch(vertex: Vertex, targetLabel: string) {
    const vertexIndex = this.vertices.indexOf(vertex);

    if (vertexIndex !== -1) {
      const currentVertex = this.vertices[vertexIndex];
      currentVertex.visited = true;

      if (vertex.label === targetLabel) {
        console.log(`${vertex.label} found.`);
        return true;
      }

      for (const adjacentVertex of this.adjacent[vertexIndex]) {
        if (
          !adjacentVertex.visited &&
          this.depthFirstSearch(adjacentVertex, targetLabel)
        ) {
          return true;
        } else return false;
      }
    }
  }

  public breadthFirstSearch(startingVertex: Vertex, targetLabel: string) {
    const queue = new Queue<Vertex>();
    const startingVertexIndex = this.vertices.indexOf(startingVertex);

    if (startingVertexIndex === -1) {
      console.log("Vertex not found.");
      return;
    }

    queue.enqueue(startingVertex);
    startingVertex.visited = true;

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();
      console.log(`Visited ${currentVertex?.label}.`);

      if (currentVertex?.label === targetLabel) {
        console.log(`Found ${currentVertex?.label}.`);
        return;
      }

      const currentVertexIndex = this.vertices.indexOf(currentVertex!);

      for (let adjacentVertex of this.adjacent[currentVertexIndex]) {
        if (!adjacentVertex.visited) {
          queue.enqueue(adjacentVertex);
          adjacentVertex.visited = true;
        }
      }
    }

    console.log(`Vertex ${targetLabel} not found.`);
  }
}
