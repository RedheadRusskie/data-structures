import { LinkedListNode } from "./LinkedListNode";

export class DLinkedListNode extends LinkedListNode {
  constructor(element: string) {
    super(element);
    this.prev = null;
  }
}
