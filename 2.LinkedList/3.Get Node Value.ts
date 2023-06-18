/**
 * Given a pointer to the head of a linked list and a specific position, 
 * determine the data value at that position. Count backwards from the tail node. 
 * The tail is at postion 0, its parent is at 1 and so on.
 */

/**
 * TC - O(N)
 * SC - O(1)
 */

function getNode(llist: SinglyLinkedListNode, positionFromTail: number): number {
    // Write your code here
    let count = 0;
    let ptr = llist;
    while(ptr != null){
        count = count + 1;
        ptr = ptr.next;
    }
    
    let post = count - (positionFromTail);
    
    count = 0;
    ptr = llist;
     while(ptr != null){
        count = count + 1;
         
         if(count == post){
             return ptr.data;
         }
        ptr = ptr.next;
    }
}