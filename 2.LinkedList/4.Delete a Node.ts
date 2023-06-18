/**
 * Delete the node at a given position in a linked list and return a reference to the head node. 
 * The head is at position 0. The list may be empty after you delete the node. 
 * In that case, return a null value.
 */

/**
 * TC - O(N)
 * SC - O(1)
 */

function deleteNode(llist: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    // Write your code here
    if(position == 0){
        llist = llist.next;
    } else {
        let temp = llist;
        let count = 0;
        let prev = llist;
        
        while(count != position){
            prev = temp;
            temp = temp.next;
            count ++;
        }
        
        prev.next = temp.next;
    }
 return llist;
}