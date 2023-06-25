/**
 *You’re given the pointer to the head nodes of two linked lists. 
 Compare the data in the nodes of the linked lists to check if they are equal. 
 If all data attributes are equal and the lists are the same length, return . Otherwise, return 0.
 */


/**
 * TC - O(N)
 * SC - O(1)
 */

function CompareLists(llist1, llist2) {
    let ptr1 = llist1, ptr2 = llist2;
    
    if(ptr1 == null && ptr2 == null) return 1;
    else if(ptr1 == null && ptr2 != null) return 0;
    else if(ptr1 != null && ptr2 == null) return 0;
    else {
        while(ptr1 != null && ptr2 != null){
            if(ptr1.data != ptr2.data) return 0;
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }
        
        if(ptr1 != null || ptr2 != null) return 0;
        else return 1;
    }
}