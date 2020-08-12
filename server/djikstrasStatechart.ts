import { Machine, interpret, assign } from 'xstate';

class WeightedGraph {
  adjacencyList;

  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}

class PriorityQueue {
  values

  constructor(){
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const sampleGraph = new WeightedGraph();
sampleGraph.addVertex("A");
sampleGraph.addVertex("B");
sampleGraph.addVertex("C");
sampleGraph.addVertex("D");
sampleGraph.addVertex("E");
sampleGraph.addVertex("F");

sampleGraph.addEdge("A","B", 4);
sampleGraph.addEdge("A","C", 2);
sampleGraph.addEdge("B","E", 3);
sampleGraph.addEdge("C","D", 2);
sampleGraph.addEdge("C","F", 4);
sampleGraph.addEdge("D","E", 3);
sampleGraph.addEdge("D","F", 1);
sampleGraph.addEdge("E","F", 1);

const nodes = new PriorityQueue();

const createDijkstrasMachine = (graph, nodes, start, finish) => {
  
  const initializeContext = () => {
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    
    console.log('Graph: ', graph);

    for(let vertex in graph.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    
    console.log('Distances: ', distances, nodes);
    
    return {
      graph,
      nodes,
      distances,
      previous,
      path,
      smallest,
      start,
      finish
    };
  };
  
  const updateFindValues = assign((context: any, event) => {
    if(context.smallest || context.distances[context.smallest] !== Infinity){
      for(let neighbor in context.graph.adjacencyList[context.smallest]){
        //find neighboring node
        let nextNode = context.graph.adjacencyList[context.smallest][neighbor];
        //calculate new distance to neighboring node
        let candidate = context.distances[context.smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        
        console.log('Debug: ', candidate, nextNeighbor, context.distances)
        
        if(candidate < context.distances[nextNeighbor]){
          //updating new smallest distance to neighbor
          context.distances[nextNeighbor] = candidate;
          //updating previous - How we got to neighbor
          context.previous[nextNeighbor] = context.smallest;
          //enqueue in priority queue with new priority
          context.nodes.enqueue(nextNeighbor, candidate);
        }
      }
      
      console.log('Context Nodes: ', context.nodes);
    }

    return context;
  });
  
  function isAllNodesVisited(context, event) {
    // console.log('Nodes: ', context.nodes);
    return !context.nodes.values.length;
  }
  
  function nodesYetToVisit(context, event) {
    return context.nodes.values.length;
  }
  
  const isShortestPath = (context, event) => {
    // console.log('Context: ', context);
    return (context.smallest === context.finish);
  }
  
  const updateSmallestNode = (context, event) => {
    const dequeuedNode = context.nodes.dequeue();
    console.log('dequeuedNode', dequeuedNode, context.nodes);
    context.smallest = dequeuedNode.val;

    return {
      smallest: context.smallest,
    }
  }
  
  function buildPath(context, event) {
    console.log('Building Path: ');
    while(context.previous[context.smallest]){
      context.path.push(context.smallest);
      context.smallest = context.previous[context.smallest];
    }
    const path = context.path.concat(context.smallest).reverse();
    
    console.log('Shortest Path: ', path);
  }
  
  return Machine({
    id: 'dijkstras',
    context: initializeContext(),
    initial: 'idle',
    states: {
      idle: {
        on: {
          FIND: {
            target: 'finding',
          }
        }
      },
      finding: {
        entry: 'updateSmallestNode',
        on: {
          // Transient transition
          '': [
            {
              target: 'logResult',
              cond: 'isAllNodesVisited'
            }, {
              target: 'buildShortestPath',
              cond: 'isShortestPath'
            }
          ],
          FIND: {
            cond: 'nodesYetToVisit',
            target: 'finding',
            actions: 'updateFindValues',
          }
        }
      },
      logResult: {
        on: {
          LOG: {
            target: 'finished',
            actions: 'buildPath',
          }
        }
      },
      buildShortestPath: {
        type: 'final'
      },
      finished: {
        type: 'final'
      },
    },
  },
  {
    actions: { updateFindValues, updateSmallestNode, buildPath },
    guards: { isAllNodesVisited, isShortestPath, nodesYetToVisit }
  }
  );
};

const dijkstrasMachine = createDijkstrasMachine(sampleGraph, nodes, 'A', 'E');

const dijkstrasService = interpret(dijkstrasMachine).onTransition(state => {
  console.log(state.value);
  console.log(state.context.nodes);
});

// Start the service
dijkstrasService.start();
// => 'pending'

dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('FIND');
dijkstrasService.send('SHORTEST_PATH_FOUND');