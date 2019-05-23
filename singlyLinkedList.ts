// ? means optional property
// TS -  default assumption that properties are public, so need to assign for private and protected
// <T> - generic 

// TODO: add insert and reverse

interface NodeInterface<T> {
  val: T;
  next?: NodeInterface<T>;
}

class SinglyLinkedList<T> {
  private head?: NodeInterface<T> = null;
  private tail?: NodeInterface<T>  = null;
  private length: number = 0;

  push(val: T): SinglyLinkedList<T> {
    let newNode: NodeInterface<T> = { val, next: null }
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return this;
  }

  pop(): NodeInterface<T> | undefined {
    if (!this.head) return undefined;
    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null;
    this.length -= 1
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current;
  }

  shift(): NodeInterface<T> | undefined {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next
    this.length -= 1
    if (this.length === 0)  {
      this.tail = null
    }
    return currentHead;
  }

  get(index: number): NodeInterface<T> | null {
    if (index < 0 || index >= this.length) return null;let counter: number = 0;
    let current = this.head;
    while (counter !== index){
      current = current.next
      counter += 1
    }
    return current;
  }

  set(index: number, val: T): boolean {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true;
    }
    return false;
  }

  print(): void {
    let current = this.head;
    let arr: Array<T> = []
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList()
console.log('push', list.push(5))
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.print()
console.log('pop',list.pop())
console.log('push', list.push(5))
console.log('shift', list.shift())
list.print()
