import { Graph, Node } from "./Graph"

const findClosestNode = (distances: {node: Node, weight: number}[], visited: Node[]): Node | undefined => {
    let closest: {node: Node, weight: number} | undefined;
    distances.forEach(node => {
        if (!closest || node.weight < closest.weight) {
            if (!visited.includes(node.node)) {
                closest = node;
            }
        }
    })
    return closest?.node;
}

export const findRoute = (graph: Graph, start: Node, end: Node) => {
    //
}