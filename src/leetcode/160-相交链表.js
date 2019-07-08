export const getIntersectionNode = (headA, headB) => {
  let aLength = 0, bLength = 0;
  let nodeA = headA, nodeB = headB;
  while (nodeA) {
    aLength += 1;
    nodeA = nodeA.next;
  }
  while (nodeB) {
    bLength += 1;
    nodeB = nodeB.next;
  }
  let start = headA, another = headB;
  let diff = aLength - bLength;
  if (diff < 0) {
    start = headB;
    another = headA;
  }
  for (let i = 0; i < Math.abs(diff); i++) {
    start = start.next
  }
  while (start && another) {
    if (start === another) {
      return start
    }
    start = start.next;
    another = another.next;
  }
  return null;
};
