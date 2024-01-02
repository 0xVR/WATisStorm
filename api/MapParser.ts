// TODO: Integrate with graph
import fs from 'fs';

async function parseMap(): Promise<void> {
    const data = await fs.promises.readFile("../assets/map.txt", "utf8");
    data.split('\n').forEach(e => {
        if (e.startsWith("building")) {
            /* Add node
            [id, name] = e.substring(e.indexOf(' '))).split('-') */
        } else if (e.startsWith("connection")) {
            /* Add edge
            [node1, node2] = e.substring(e.indexOf(' '))).split() */
        }
    })
}