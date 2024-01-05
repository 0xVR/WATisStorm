import { Graph, Node } from "./Graph"

const findClosestNode = (distances: {[nodeid: string]: {node: Node, weight: number}}, visited: Node[]): Node | undefined => {
    let closest: {node: Node, weight: number} | undefined;
    for (const node in distances) {
        if (!closest || distances.node.weight < closest.weight) {
            if (!visited.includes(distances.node.node)) {
                closest = distances.node;
            }
        }
    }
    return closest?.node;
}

export const findRoute = (graph: Graph, start: Node, end: Node) => {
    let distances: {[nodeid: string]: {node: Node, weight: number}} = {};
    distances[end.id] = {node: end, weight: Infinity};
    start.adjacents.forEach(n => {distances[n.node.id] = n});

    let parents: {[nodeid: string]: Node | null} = {};
    parents[end.id] = null;
    start.adjacents.forEach(n => parents[n.node.id] = start);

    let visited: Node[] = [];
    let node = findClosestNode(distances, visited);
}