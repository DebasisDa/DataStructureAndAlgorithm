/**
 * You are given the pointer to the head node of a linked list and an integer to add to the list.
 *  Create a new node with the given integer. Insert this node at the tail of the linked list and 
 * return the head node of the linked list formed after inserting this new node.
 * The given head pointer may be null, 
 * meaning that the initial list is empty.
 */

/**
 * TC - O(N)
 * SC - O(1)
 */


function insertNodeAtTail(head, data) {
    let node = new SinglyLinkedListNode(data);
      if(head == null){
          head = node;
      } else {
          let temp = head;
          while(temp.next != null){
              temp = temp.next;
          }
          temp.next = node;
      }
      return head;
  }