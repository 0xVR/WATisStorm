import { Graph } from './Graph';
import * as fs from 'fs';
import * as path from 'path';

export const parseMap = async (graph: Graph) => {
    const data = await fs.promises.readFile(path.resolve(__dirname, "../assets/map.txt"), "utf8");
    data.split('\n').forEach(e => {
        if (e.startsWith("building")) {
            // Add node
            const [id, name] = e.substring(e.indexOf(' ') + 1).split('-');
            graph.addNode(id, name);
        } else if (e.startsWith("connection")) {
            // Add edge
            console.log(graph.nodes);
            const ids = e.substring(e.indexOf(' ') + 1).split(' ')
            ids.map(n => {
                if (graph.nodes.has(n)) {
                    return graph.nodes.get(n);
                } else {
                    throw new Error("Undefined connection!");
                }
            })
            console.log(ids);
            /*
            const [source, destination] = ids;
            source.addAdjacent(destination);
            destination.addAdjacent(source);*/
        }
    })
}

parseMap(new Graph());