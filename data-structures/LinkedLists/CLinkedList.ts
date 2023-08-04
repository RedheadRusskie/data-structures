import { LinkedList } from "./LinkedList";
import { LinkedListNode } from "./LinkedListNode";

export class CircularlyLinkedList extends LinkedList {
  head: LinkedListNode | null;

  constructor() {
    super();
    this.head = new LinkedListNode("head");
    this.head.next = this.head;
  }

  public display() {
    let currentNode = this.head;

    if (currentNode == null) return;

    while (currentNode!.next !== this.head) {
      console.log(`Next element from CLL: ${currentNode!.next?.element}`);
      currentNode = currentNode!.next;
    }

    currentNode = currentNode!.next;
  }
}
