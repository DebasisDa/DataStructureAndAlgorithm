/**
 * Leetcode - 19
 */


/**
 * TC - O(N)
 * SC - O(1)
 */


//Fast and slow pointer
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head
         let slow = head
  
         for(let i=0;i<n;i++){
             fast = fast.next
         }
  
         if(!fast)
             return head.next
  
         while(fast.next){
             fast = fast.next
             slow = slow.next
         }
  
         slow.next = slow.next.next
         return head
 };


 //Two pointer
 
function RemoveNNodeBack(start, k) {
    // Write your code here
  let ptr = start, length = 0, prev = null, count =0;

   while(ptr != null){
       length++;
       ptr = ptr.next;
   }

   let pos = length - k;
   ptr = start

    if(pos == 0){
        start = start.next;
        ptr.next = null;
        return start;
      }

   
   while(ptr != null){
       if(pos == count){
          prev.next = ptr.next;
          ptr.next = null;
          return start;
       }
       prev = ptr;
       ptr = ptr.next;
       count++;
   }

}