/**
 * Leetcode - 160
 */


/**
 * TC - O(N)
 * SC - O(1)
 */


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let countA =0, countB =0;
    let tempA = headA, tempB = headB;
 
    while(tempA != null){
        countA++;
        tempA = tempA.next;
    }
 
       while(tempB != null){
        countB++;
        tempB = tempB.next;
    }
 
 tempA = headA;
 tempB = headB;
 while(countA > countB){
   tempA = tempA.next;
   countA --;
 }
 
 while(countB > countA){
 tempB = tempB.next;
   countB --;
 }
 
 while(countB >=0 && countA >= 0){
    if(tempA == tempB){
        return tempA;
    }
    tempA = tempA.next;
    tempB = tempB.next;
    countB --;
    countA --;
 }
 
 return null;
 }