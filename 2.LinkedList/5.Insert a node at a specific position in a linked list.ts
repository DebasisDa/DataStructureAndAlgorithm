/**
 * Given the pointer to the head node of a linked list and an integer to insert at 
 * a certain position, create a new node with the given integer as its  
 * attribute, insert this node at the desired position and return the head node.
A position of 0 indicates head, a position of 1 indicates one node away 
from the head and so on. The head pointer given may be null meaning that the initial list is empty.
 */


/**
 * TC - O(N)
 * SC - O(1)
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
     let newNode = new SinglyLinkedListNode(data);

    if (llist == null) {
      llist = newNode;
    }
    
   if (position == 0) {
      newNode.next = llist;
      llist = newNode;
    }

    else {
      let count = 0;
      let temp = llist, prev = llist;

      while (count != position) {
        prev = temp;
        temp = temp.next;
        count++;
      }

      prev.next = newNode;
      newNode.next = temp;
      return llist;
    }

}