var Vertex = /** @class */ (function () {
    function Vertex(label) {
        this.label = label;
    }
    Vertex.prototype.toString = function () {
        return this.label;
    };
    return Vertex;
}());
var Graph = /** @class */ (function () {
    function Graph(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.adjacent = [];
        for (var i = 0; i < vertices.length; i++) {
            this.adjacent[i] = [];
        }
    }
    Graph.prototype.addEdge = function (v, w) {
        var vIndex = this.vertices.indexOf(v);
        var wIndex = this.vertices.indexOf(w);
        if (vIndex !== -1 && wIndex !== -1) {
            this.adjacent[vIndex].push(w);
            this.adjacent[wIndex].push(v);
            this.edges++;
        }
    };
    Graph.prototype.showGraph = function () {
        for (var i = 0; i < this.vertices.length; ++i) {
            console.log("".concat(this.vertices[i].toString(), " -> "));
            for (var j = 0; j < this.vertices.length; ++j) {
                if (this.adjacent[i][j] !== undefined)
                    console.log("".concat(this.adjacent[i][j].toString()));
            }
        }
    };
    return Graph;
}());
var vertexA = new Vertex("A");
var vertexB = new Vertex("B");
var vertexC = new Vertex("C");
var vertexD = new Vertex("D");
var graph = new Graph([vertexA, vertexB, vertexC, vertexD]);
graph.addEdge(vertexA, vertexB);
graph.addEdge(vertexB, vertexC);
graph.addEdge(vertexC, vertexD);
graph.addEdge(vertexA, vertexC);
graph.showGraph();
