class Dictionary<K, V> {
  datastore: { key: K; value: V }[];

  constructor() {
    this.datastore = [];
  }

  public add = (key: K, value: V) => {
    const existingIndex = this.findIndexByKey(key);

    if (existingIndex !== -1) this.datastore[existingIndex] = { key, value };
    else this.datastore.push({ key, value });
  };

  public find = (key: K): V | undefined => {
    const entry = this.datastore.find((item) => item.key === key);
    return entry ? entry.value : undefined;
  };

  public remove = (key: K): boolean => {
    const index = this.findIndexByKey(key);

    if (index !== -1) {
      this.datastore.splice(index, 1);
      return true;
    }

    return false;
  };

  public clear = () => (this.datastore = []);

  public showAll = () => {
    this.datastore.forEach(({ key, value }) => {
      console.log(`${key}: ${value}`);
    });
  };

  count = () => this.datastore.length;

  private findIndexByKey(key: K): number {
    return this.datastore.findIndex((item) => item.key === key);
  }
}
