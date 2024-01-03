import { Graph, Node } from './Graph';
import * as fs from 'fs';
import * as path from 'path';

export const parseMap = async (graph: Graph) => {
    const data = await fs.promises.readFile(path.resolve(__dirname, "../assets/map.txt"), "utf8");
    data.split('\n').forEach(e => {
        e = e.trim()
        if (e.startsWith("building")) {
            // Add node
            const [id, name] = e.substring(e.indexOf(' ') + 1).split('-');
            graph.addNode(id, name);
        } else if (e.startsWith("connection")) {
            // Add edge
            const ids = e.substring(e.indexOf(' ') + 1).split(' ').map((n): Node => {
                const node = graph.nodes.get(n);
                if (!node) throw new Error("Undefined connection");
                return node;
            })
            const [source, destination] = ids;
            source.addAdjacent(destination);
            destination.addAdjacent(source);
        }
    })
}