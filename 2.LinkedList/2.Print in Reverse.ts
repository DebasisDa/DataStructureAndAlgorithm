/**
 * Given a pointer to the head of a singly-linked list, print each  
 * value from the reversed list. If the given list is empty, do not print anything.
 */


/**
 * TC - O(N)
 * SC - O(1)
 */

function reversePrint(llist: SinglyLinkedListNode): void {
    // Write your code here
        let curr = llist, prev = null, next = null;

        while (curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
    
    curr = prev;
    while(curr != null){
        console.log(curr.data);
        curr = curr.next;
    }

}