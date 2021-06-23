import { LinkedList, ListNode, RecCall } from "./LinkedList";

const numArr = [4, 3, 2, 1, 6, 7, 5, 9, 1];

console.log("trying " + numArr);

function rec(arr: number[]): LinkedList {
  if (arr.length === 1) {
    return new LinkedList(
      new ListNode({
        num: arr[0],
        operation: "leaf",
        newArr: arr,
        newArrIndex: 0,
        operatingOn: arr[0],
      })
    );
  }
  const num = arr.pop();
  let minus: LinkedList = calcOperation(arr, num, "minus");
  let plus: LinkedList = calcOperation(arr, num, "plus");
  plus.combineList(minus);
  return plus;
}
const result = rec(numArr);
const found = didFind0(result);
if (found) {
  console.log("FOUND 0!!!");
  found.printTree();
}

function getClosestTo0(list: LinkedList): number {
  if (!list || list.length === 0) return;
  let tN: ListNode = list.head;
  let min = tN.data.num;
  while (tN !== null && tN.data) {
    if (Math.abs(tN.data.num) < Math.abs(min)) min = tN.data.num;

    tN = tN.next;
  }
  return min;
}
function didFind0(list: LinkedList): ListNode | false {
  let tN: ListNode = list.head;
  while (tN !== null && tN.data) {
    if (tN.data.operation === "leaf" && tN.data.num === 0) {
      let tNN: ListNode = tN;
      while (tNN.prev != null) tNN = tNN.prev;
      return tNN;
    }
    tN = tN.next;
  }
  return false;
}
function calcOperation(
  arr: number[],
  num: number,
  operation: "plus" | "minus"
): LinkedList {
  let defRet;
  for (let i = 0; i < arr.length; i++) {
    const tempArr = [...arr];
    const storeOgNum = tempArr[i];
    tempArr[i] += operation === "minus" ? -num : num;
    const tempCalc: LinkedList = new LinkedList(
      new ListNode({
        num,
        operation,
        newArr: tempArr,
        newArrIndex: i,
        operatingOn: storeOgNum,
      })
    );
    tempCalc.combineList(rec(tempArr));
    if (didFind0(tempCalc)) {
      return tempCalc;
    }
    if (!defRet || getClosestTo0(defRet) > getClosestTo0(tempCalc)) {
      defRet = tempCalc;
    }
    tempCalc.clear();
  }
  return defRet;
}
