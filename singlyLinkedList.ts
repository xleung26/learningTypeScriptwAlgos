// ? means optional property
// TS -  default assumption that properties are public, so need to assign for private and protected
// <T> - generic - enforce type consistency. if value inserted was string (ex: 'a') then value for that node should be a string. 

// TODO: add insert and reverse

interface NodeInterface<T> {
  val: T;
  next?: NodeInterface<T>;
}

class SinglyLinkedList<T> {
  // set these properties to private, so that only class methods can alter the values
  private head?: NodeInterface<T> = null;
  private tail?: NodeInterface<T>  = null;
  private length: number = 0;

  // methods are public to allow interaction with the class
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

  unshift(val: T): SinglyLinkedList<T> {
    let newNode: NodeInterface<T> = { val, next: null }
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
    return this;
  }

  get(index: number): NodeInterface<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter: number = 0;
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

  insert(index: number, val: T): boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) !!this.unshift(val)
    if (index === this.length) !!this.push(val)
    
    let newNode: NodeInterface<T> = { val, next: null }
    let prevNode = this.get(index-1)
    newNode.next = this.get(index)
    prevNode.next = newNode
    this.length += 1
    return true;
  }

  reverse(): SinglyLinkedList<T> {
    let current: NodeInterface<T> = this.head
    this.head = this.tail
    this.tail = current
    let next,
        prev = null;

    for (let i = 0; i < this.length; i += 1){
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this;
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
list.set(3, 88)
console.log('pop',list.pop())
console.log('push', list.push(5))
console.log('shift', list.shift())
console.log('unshift', list.unshift(23))
list.print()
list.insert(3, "a")
list.reverse()
list.print()
