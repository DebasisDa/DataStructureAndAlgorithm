/**
 * Leetcode - 83
 */


/**
 * TC - O(N)
 * SC - O(1)
 */



deleteDuplicates(head) {
    let  result =this.head, temp = null;
    let prev = result, curr = result.next;
    while(curr != null){
        if(curr.data == prev.data){
           console.log(curr.next +" => "+prev.next);
           prev.next = curr.next;
           prev =curr.next;
           curr = curr.next.next;
        } else {
        prev = curr;
        curr = curr.next;
        }
    }
    // return result;
    while (result != null) {
      console.log("deleteDuplicates Value : ", result.data);
      result = result.next;
    }
};