import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  head: LinkedListNode | null;

  constructor() {
    this.head = new LinkedListNode("head");
  }

  public find(item: string) {
    let currentNode = this.head;

    while (currentNode?.element !== item) {
      currentNode !== null ? (currentNode = currentNode.next) : null;
    }

    return currentNode;
  }

  public insert(newElement: string, item: string) {
    const currentNode = this.find(item);

    if (currentNode) {
      const newNode = new LinkedListNode(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  public display() {
    let currentNode = this.head;

    while (currentNode?.next !== null) {
      console.log("Current Node: ", currentNode?.next.element);
      currentNode = currentNode!.next;
    }
  }

  public findPrevious(item: string) {
    let currentNode = this.head;

    while (currentNode?.next !== null && currentNode?.next.element !== item) {
      if (currentNode !== null) currentNode = currentNode?.next;
    }
    return currentNode;
  }

  public remove(item: string) {
    let previousNode = this.findPrevious(item);

    if (previousNode.next !== null) previousNode.next = previousNode.next.next;
  }
}
