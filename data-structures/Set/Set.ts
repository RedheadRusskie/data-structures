export class Set {
  datastore: string[];
  size: number;

  constructor() {
    this.datastore = new Array<string>();
    this.size = 0;
  }

  public contains(item: string) {
    if (this.datastore.indexOf(item) > -1) return true;
    else return false;
  }

  public add(item: string) {
    if (this.contains(item)) {
      return false;
    } else {
      this.datastore.push(item);
      this.size++;
      return true;
    }
  }

  public remove(item: string) {
    if (this.contains(item)) {
      this.datastore.splice(this.datastore.indexOf(item), 1);
      this.size--;
      return true;
    } else return false;
  }

  public displayMembers() {
    console.log(this.datastore);
  }

  public union(set: Set) {
    const tempset = new Set();
    tempset.datastore = this.datastore;

    for (let i = 0; i < this.datastore.length; i++) {
      if (!tempset.contains(set.datastore[i])) tempset.add(set.datastore[i]);
    }

    return tempset;
  }

  public inersect(set: Set) {
    const tempset = new Set();

    for (let i = 0; i < this.size; i++) {
      if (set.contains(this.datastore[i])) tempset.add(this.datastore[i]);
    }

    return tempset;
  }

  public subset(set: Set) {
    if (set.size > this.size) return;

    this.datastore.forEach((member) => {
      if (!set.contains(member)) return false;
    });

    return true;
  }

  public difference(set: Set) {
    const tempSet = new Set();

    for (let i = 0; i < this.datastore.length; i++) {
      if (!set.contains(this.datastore[i])) tempSet.add(this.datastore[i]);
    }

    return tempSet;
  }
}
