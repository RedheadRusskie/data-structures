import { DLinkedListNode } from "./DLinkedListNode";

export class LinkedListNode {
  element: string;
  next: LinkedListNode | null;
  prev?: DLinkedListNode | null;

  constructor(element: string) {
    this.element = element;
    this.next = null;
  }
}
