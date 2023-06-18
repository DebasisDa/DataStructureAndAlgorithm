/**
 * Given a pointer to the head of a linked list, insert a new node before the head. 
 * The  value in the new node should point to  and the  value should be replaced with a given value.
 *  Return a reference to the new head of the list.
 *  The head pointer given may be null meaning that the initial list is empty.
 */

/**
 * TC - O(N)
 * SC - O(1)
 */

function insertNodeAtHead(head, data) {

    let newNode = new SinglyLinkedListNode(data);

    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    return head;
}