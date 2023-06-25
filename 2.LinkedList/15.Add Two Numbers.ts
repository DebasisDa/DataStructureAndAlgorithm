/**
 * Leetcode - 2
 */


/**
 * TC - O(N)
 * SC - O(N) -> Extra linked list need
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let ptrl1 = l1, ptrl2 = l2, ptrl3 = null, finsllist = null;
    let more = false;

    while( ptrl1 != null && ptrl2 != null){
    let sum = ptrl1.val + ptrl2.val;
    if(more){
        sum = sum + 1;
        more = false;
    }

    if(sum >= 10){
        more = true;
        sum = sum - 10;
    }

    let node = new ListNode(sum , null);

    if(finsllist == null){
        finsllist = node;
        ptrl3 = node;
    } else {
        ptrl3.next = node;
        ptrl3 = ptrl3.next;
    }
    ptrl1 = ptrl1.next;
    ptrl2 = ptrl2.next;
    }

    while(ptrl1 != null){
    let sum = ptrl1.val;
    if(more){
        sum = sum + 1;
        more = false;
    }

    if(sum >= 10){
        more = true;
        sum = sum - 10;
    }
    
    let node = new ListNode(sum , null);

    if(finsllist == null){
        finsllist = node;
        ptrl3 = node;
    } else {
        ptrl3.next = node;
        ptrl3 = ptrl3.next;
    }
    ptrl1 = ptrl1.next;
    }

    
    while(ptrl2 != null){
    let sum = ptrl2.val;
    if(more){
        sum = sum + 1;
        more = false;
    }

    if(sum >= 10){
        more = true;
        sum = sum - 10;
    }
    
    let node = new ListNode(sum , null);

    if(finsllist == null){
        finsllist = node;
        ptrl3 = node;
    } else {
        ptrl3.next = node;
        ptrl3 = ptrl3.next;
    }
    ptrl2 = ptrl2.next;
    }

if(more){
    let node = new ListNode(1 , null);

    if(finsllist == null){
        finsllist = node;
        ptrl3 = node;
    } else {
        ptrl3.next = node;
        ptrl3 = ptrl3.next;
    }
}
    return finsllist;
};