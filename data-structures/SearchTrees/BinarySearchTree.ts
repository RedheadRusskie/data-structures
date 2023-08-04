export class TreeNode {
  public data: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  public head: TreeNode | null;

  constructor(head?: TreeNode) {
    this.head = head || null;
  }

  public insert(node: TreeNode | null = this.head, value: number): TreeNode {
    if (node === null) {
      const root = new TreeNode(value);
      return root;
    }

    if (value < node.data) {
      node.left = this.insert(node.left, value);
    } else {
      node.right = this.insert(node.right, value);
    }

    return node;
  }

  public inOrderTraverseal(root: TreeNode | null = this.head) {
    let temp = root;

    if (temp !== null) {
      this.inOrderTraverseal(temp.left);
      console.log(temp?.data);
      this.inOrderTraverseal(temp.right);
    }
  }

  public preOrderTraverseal(root: TreeNode | null = this.head) {
    let temp = root;

    if (temp !== null) {
      console.log(temp?.data);
      this.inOrderTraverseal(temp.left);
      this.inOrderTraverseal(temp.right);
    }
  }

  public search = (node: TreeNode | null = this.head, value: number) => {
    const temp = node;
    if (temp === null) return null;

    if (temp.data == value) return temp;

    if (value < temp.data) return this.search(temp.left, value);
    else if (value > temp.data) return this.search(temp.right, value);

    return node;
  };
}
