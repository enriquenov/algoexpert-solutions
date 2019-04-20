class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length) {
      let currentNode = queue.shift();
      array.push(currentNode.name);
      if (currentNode.children) queue.push(...currentNode.children);
    }
    return array;
  }
}
