// Leetcode : 61

/**
 * TC - O(N)
 * SC - O(1)
 */


function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let slow = head, fast = head, finalResult = null, prev = null, slowPrev = null;

    for(let i=0; i<k; i++){
        if(fast)
         fast = fast.next;
        else 
        if(head){
          fast = head.next; 
        }
    }

    if(fast == null || k ==0) return head;

    while(fast != null){
        prev = fast;
        fast = fast.next;
        slowPrev = slow;
        slow = slow.next;
    }
   
   slowPrev.next = null;
   finalResult = slow;
   prev.next = head;

   return finalResult;

};