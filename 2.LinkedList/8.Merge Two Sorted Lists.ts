/**
 * Leetcode - 21
 */


/**
 * TC - O(N)
 * SC - O(1)
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let pntList1 = list1, pntList2 = list2, list3 = null, curr = null;

    while( pntList1 != null && pntList2 != null){
        if(pntList1.val <= pntList2.val){
            if(list3 == null){
                list3 = pntList1;
                curr = list3;
            } else {
                curr.next = pntList1;
                curr = curr.next;
            }
             pntList1 = pntList1.next;
        } else {
             if(list3 == null){
                list3 = pntList2;
                curr = list3;
            } else {
                curr.next = pntList2;
                curr = curr.next;
            }
             pntList2 = pntList2.next;
        }
    }

    while(pntList1 != null){
          if(list3 == null){
                list3 = pntList1;
                curr = list3;
            } else {
     curr.next = pntList1;
     curr = curr.next;
            }
             pntList1 = pntList1.next;
    }

       while(pntList2 != null){
            if(list3 == null){
                list3 = pntList2;
                curr = list3;
            } else {
     curr.next = pntList2;
     curr = curr.next;
    
            }
               pntList2 = pntList2.next;
    }
return list3;

};