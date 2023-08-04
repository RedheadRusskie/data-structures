import { LinkedList } from "../LinkedLists/LinkedList";

export class HashTable {
  table: Array<string | LinkedList>;

  constructor() {
    this.table = new Array(137);
  }

  public getHash(data: string) {
    let total: number = 0;

    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }

    return total % this.table.length;
  }

  public put(data: string) {
    const position = this.getHash(data);

    if (this.table[position] !== undefined) {
      if (this.table[position] instanceof LinkedList) {
        (this.table[position] as LinkedList).insert(
          data,
          this.table[position] as string
        );
      } else {
        const newList = new LinkedList();
        newList.insert(this.table[position] as string, "head");
        newList.insert(data, this.table[position] as string);
        this.table[position] = newList;
      }
    } else this.table[position] = data;
  }

  public displayAll() {
    this.table.forEach((item) => {
      if (item !== undefined && typeof item === "string")
        console.log(`Bucket at ${this.table.indexOf(item)} contains: ${item}`);

      if (item !== undefined && item.hasOwnProperty("head")) {
        console.log(
          `Bucket at ${this.table.indexOf(item)} contains: ${JSON.stringify(
            item
          )}`
        );
      }
    });
  }
}
