var GraphNode = /** @class */ (function () {
    function GraphNode(name) {
        this.name = name;
    }
    return GraphNode;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = [];
        this.edges = [];
    }
    Graph.prototype.addNode = function (name) {
        var node = new GraphNode(name);
        this.nodes.push(node);
        this.edges[name] = [];
    };
    Graph.prototype.addEdge = function (FromNode, ToNode) {
        this.edges[FromNode].push(ToNode);
        this.edges[ToNode].push(FromNode);
    };
    Graph.prototype.dfs = function (start, map) {
        if (start === void 0) { start = this.nodes[0].name; }
        if (map === void 0) { map = {}; }
        console.log(start);
        map[start] = true;
        for (var _i = 0, _a = this.edges[start]; _i < _a.length; _i++) {
            var node = _a[_i];
            if (map[node] == true)
                continue;
            else {
                this.dfs(node, map);
            }
        }
    };
    Graph.prototype.bfs = function (start, map) {
        if (start === void 0) { start = this.nodes[0].name; }
        if (map === void 0) { map = {}; }
        //map[start] = true;
        var queue = [start];
        while (queue.length != 0) {
            var node = queue.shift();
            console.log(node);
            for (var _i = 0, _a = this.edges[node]; _i < _a.length; _i++) {
                var value = _a[_i];
                if (map[value])
                    continue;
                queue.push(value);
                map[value] = true;
            }
        }
    };
    return Graph;
}());
var graphObj = new Graph();
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
