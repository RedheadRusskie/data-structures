class Vertex {
  label: string;

  constructor(label: string) {
    this.label = label;
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
}

const vertexA = new Vertex("A");
const vertexB = new Vertex("B");
const vertexC = new Vertex("C");
const vertexD = new Vertex("D");
const graph = new Graph([vertexA, vertexB, vertexC, vertexD]);
graph.addEdge(vertexA, vertexB);
graph.addEdge(vertexB, vertexC);
graph.addEdge(vertexC, vertexD);
graph.addEdge(vertexA, vertexC);
graph.showGraph();
