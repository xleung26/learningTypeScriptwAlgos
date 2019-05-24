interface NodeInterface<T> {
  val: T;
  next?: NodeInterface<T> 
}

class Stack<T> {
  private first?: NodeInterface<T> = null;
  private last?: NodeInterface<T> = null;
  private size: number = 0

  push(val: T): number {
    let newNode: NodeInterface<T> = { val, next: null }
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return this.size += 1
  }

  pop(): T {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1){
      this.first = null
      this.last = null
    } else {
      this.first = temp.next
      temp.next = null;
    }
    this.size -= 1
    return temp.val;
  }

  print(): void {
    let current = this.first
    let arr: Array<T> = []
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }
}

let newStack = new Stack()
let values = ["a", "b", "c","d", "e"]
values.map((item, index) => newStack.push(item))
newStack.push(5)
newStack.print()
newStack.pop()
newStack.print()