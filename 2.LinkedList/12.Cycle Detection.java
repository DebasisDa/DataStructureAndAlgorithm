    static boolean hasCycle(SinglyLinkedListNode head) {
  if(head == null || head.next == null) return false;
     SinglyLinkedListNode fisrt = head.next;
     SinglyLinkedListNode slow = head;

    while(fisrt != null && slow != null){
        if(fisrt == slow) return true;
        fisrt = fisrt.next;
        if(fisrt != null) fisrt = fisrt.next;
        slow = slow.next;
    }

    return false;
    }
