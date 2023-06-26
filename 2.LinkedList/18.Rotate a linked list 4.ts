/**
 * Given a singly linked list of size N. The task is to left-shift the linked list by K nodes, 
 * where K is a given positive integer
 *  smaller than or equal to length of the linked list.
 */

/**
 * TC - O(N)
 * SC - O(1)
 */


function RotateLL(start, k) {
    // Write your code here
     let lastNode = null, ptr = start;

    if(start == null || k ==0 || start.next == null) return start;
     
    while(ptr != null){
        lastNode = ptr;
        ptr = ptr.next;
    }

    for(let i=0; i<k; i++){
        let node = start;
        start = start.next;
        node.next = null;

        lastNode.next = node;
        lastNode = lastNode.next;
    }



     return start;


}