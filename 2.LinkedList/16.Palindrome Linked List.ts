/**
 * Leetcode - 234
 */


/**
 * TC - O(N)
 * SC - O(1)
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    // Write your code here
        let slow = head, fast = null, rev = null, prev = null, next = null;

    //one node
    if(head.next == null) return true;



    fast = head.next;

    while(fast != null){
        fast = fast.next;
        if(fast != null){
            fast = fast.next;
        }
        slow = slow.next;
    }

    while(slow != null){
     next = slow.next;
     slow.next = prev;
     prev = slow;
     slow = next;
    }

   fast = head;
    while(prev != null){
        if(prev.val != fast.val) return false;
        prev = prev.next;
        fast = fast.next;
    }
    return true;


};