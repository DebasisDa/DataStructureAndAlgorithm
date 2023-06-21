/**
 * Leetcode - 141
 */


/**
 * TC - O(N)
 * SC - O(1)
 */


function hasCycle(head: ListNode | null): boolean {
    if(head == null || head.next == null) return false;
    let fisrt = head.next;
    let slow = head;

    while(fisrt != null && slow != null){
        if(fisrt == slow) return true;
        fisrt = fisrt.next;
        if(fisrt) fisrt = fisrt.next;
        slow = slow.next;
    }

    return false;
};