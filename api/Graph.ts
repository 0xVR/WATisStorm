export class Node {
    id: string;
    fullName: string;
    adjacents: {node: Node, weight: number}[];

    constructor(id: string, fullName: string) {
        this.id = id;
        this.fullName = fullName;
        this.adjacents = [];
    }

    addAdjacent(node: Node): void {
        this.adjacents.push({node: node, weight: 1});
    }

    getAdjacents(): {node: Node, weight: number}[] {
        return this.adjacents;
    }

    isAdjacent(node: Node): boolean {
        return this.adjacents.map(e => e.node).indexOf(node) > -1;
    }
}

export class Graph {
    nodes: Map<string, Node>;

    constructor() {
        this.nodes = new Map();
    }

    addNode(id: string, fullName: string): Node {
        const node = new Node(id, fullName);
        this.nodes.set(id, node);
        return node;
    }

    addEdge(source: Node, destination: Node): Node[] {
        source.addAdjacent(destination);
        destination.addAdjacent(source);
        return [source, destination];
    }
}