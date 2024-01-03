"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(id, fullName) {
        this.id = id;
        this.fullName = fullName;
        this.adjacents = [];
    }
    Node.prototype.addAdjacent = function (node) {
        this.adjacents.push({ node: node, weight: 1 });
    };
    Node.prototype.getAdjacents = function () {
        return this.adjacents;
    };
    Node.prototype.isAdjacent = function (node) {
        return this.adjacents.map(function (e) { return e.node; }).indexOf(node) > -1;
    };
    return Node;
}());
exports.Node = Node;
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = new Map();
    }
    Graph.prototype.addNode = function (id, fullName) {
        var node = new Node(id, fullName);
        this.nodes.set(id, node);
        return node;
    };
    Graph.prototype.addEdge = function (source, destination) {
        source.addAdjacent(destination);
        destination.addAdjacent(source);
        return [source, destination];
    };
    return Graph;
}());
exports.Graph = Graph;
