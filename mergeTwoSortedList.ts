/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

import SinglyLinkedList from './singlyLinkedList'

interface NodeInterface<T> {
  val: T;
  next?: NodeInterface<T> | null;
}

let mergeTwoLists = <T>(l1: NodeInterface<T>, l2: NodeInterface<T>): NodeInterface<T> => {
  if (!l1) return l2
  if (!l2) return l1
  let result: NodeInterface<T> = { val: undefined, next: null } 
  if (l1.val < l2.val){
    result.val = l1.val
    result.next = mergeTwoLists(l1.next, l2)
  } else {
    result.val = l2.val
    result.next = mergeTwoLists(l2.next, l1)
  }
  return result;
}

let l1 = new SinglyLinkedList()
let val1 = [1, 2, 4]
val1.forEach((item, key) => { l1.push(item) })
let l2 = new SinglyLinkedList()
let val2 = [1, 3, 4]
val2.forEach((item, key) => { l2.push(item) })

let result = mergeTwoLists(l1.head, l2.head)

let resultsArr = []
while(result){
  resultsArr.push(result.val)
  result = result.next
}

console.log(resultsArr)

