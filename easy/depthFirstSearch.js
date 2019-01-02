class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    this.children.forEach(child => {
      child.depthFirstSearch(array);
    });

    return array;
  }
}
