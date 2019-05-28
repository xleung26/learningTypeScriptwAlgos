interface INode<T> {
  val: T;
  next?: INode<T>;
}

class Queue<T> {
  private first?: INode<T> = null;
  private last?: INode<T> = null;
  private size: number = 0;

  enqueue(val: T): number {
    let newNode: INode<T> = { val, next: null }
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size += 1
  }

  dequeue(): T {
    if (!this.first) return null;

    let temp = this.first
    this.first = temp.next
    
    return temp.val
  }
  print(): void {
    let current = this.first
    let arr: Array<T> = []
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

let queue = new Queue()

let val = [1, 2, 3, 4, 5, 6]

val.forEach((item, key) => queue.enqueue(item))
queue.print()
queue.dequeue()
queue.print()



