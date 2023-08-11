export class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  public enqueue(element: T) {
    this.elements.push(element);
  }

  public dequeue() {
    if (!this.isEmpty()) return this.elements.shift();
  }

  public isEmpty() {
    return this.elements.length === 0;
  }

  public size() {
    return this.elements.length;
  }
}
