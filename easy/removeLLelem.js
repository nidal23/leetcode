var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }
    let curr = head
    let prev;
    while (curr !== null) {
        if (curr.val === val) {
            if (curr === head) {
                curr = head.next;

                head = curr
                continue;
            } else {
                prev.next = curr.next;

                curr = prev.next;
                continue;
            }
        }
        prev = curr
        curr = curr.next
    }


    return head
};