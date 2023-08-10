class GraphNode {
    constructor(name) {
        this.name = name;
    }
}
class Graph {
    constructor() {
        this.nodes = [];
        this.edges = new Map();
    }
    addNode(name) {
        const node = new GraphNode(name);
        this.nodes.push(node);
        this.edges.set(node, []);
    }
    addEdge(FromNode, ToNode) {
        let node1 = this.nodes.find((node) => node.name == FromNode);
        let node2 = this.nodes.find((node) => node.name == ToNode);
        this.edges.get(node1).push(node2);
        this.edges.get(node2).push(node1);
    }
    dfs(start = this.nodes[0], map = {}) {
        console.log(start.name);
        map[start.name] = true;
        for (let node of this.edges.get(start)) {
            if (map[node.name] == true)
                continue;
            else {
                map[node.name] = true;
                this.dfs(node, map);
            }
        }
    }
    bfs(start = this.nodes[0], map = {}) {
        let queue = [start];
        map[start.name] = true;
        while (queue.length != 0) {
            const node = queue.shift();
            console.log(node.name);
            for (let valu of this.edges.get(node)) {
                if (map[valu.name] == true)
                    continue;
                queue.push(valu);
                map[valu.name] = true;
            }
        }
    }
}
const graphObj = new Graph();
graphObj.addNode('delhi');
graphObj.addNode('mumbai');
graphObj.addNode('mangalore');
graphObj.addNode('Bangalore');
graphObj.addNode('hyderabad');
graphObj.addNode('kerala');
graphObj.addEdge('delhi', 'mumbai');
graphObj.addEdge('mangalore', 'Bangalore');
graphObj.addEdge('hyderabad', 'mumbai');
graphObj.addEdge('hyderabad', 'kerala');
graphObj.addEdge('Bangalore', 'kerala');
graphObj.addEdge('delhi', 'mangalore');
graphObj.bfs();
