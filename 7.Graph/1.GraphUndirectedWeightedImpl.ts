class GraphNode {
    name;

    constructor(name){
        this.name = name;
    }
}

class Graph {
    nodes;
    edges;
    constructor (){
        this.nodes = [];
        this.edges = [];
    }

    addNode(name){
        const node = new GraphNode(name);
        this.nodes.push(node);
        this.edges[name] = [];
    }

    addEdge(FromNode, ToNode){
       this.edges[FromNode].push(ToNode);
       this.edges[ToNode].push(FromNode);
    }

    dfs(start = this.nodes[0].name, map={}){
        console.log(start);
       map[start] = true;
       for(let node of this.edges[start]){
        if(map[node] == true) continue; 
        else {
            this.dfs(node, map);
        }
       }
    }

    bfs(start = this.nodes[0].name, map={}){
        let queue = [start];
        while(queue.length != 0){
            const node = queue.shift();
            console.log(node);
            for(let value of this.edges[node]){
                if(map[value]) continue;
                queue.push(value);
                map[value] = true;
            }
        }
    }
}

const graphObj =  new Graph();
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