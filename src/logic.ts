import { LinkedList, ListNode } from "./LinkedList";

function createNumArr(str: string): number[] {
  const ret: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    ret.push(+element);
  }
  return ret;
}
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
  if (arr.length >= 2) {
    for (let i = 0; i < arr.length - 1; i++) {
      const element = arr[i];
      const tArr = [...arr];
      tArr.splice(i, 1);
      tArr[i] += element * 10;
      const res = rec(tArr);
      if (didFind0(res)) {
        return res;
      }
    }
  }
  const num = arr.pop();
  if (num === undefined) throw new Error("arr pop return undefined");
  let minus: LinkedList | undefined = calcOperation(arr, num, "minus");
  let plus: LinkedList | undefined = calcOperation(arr, num, "plus");
  if (plus === undefined || minus === undefined) {
    throw new Error();
  }
  plus.combineList(minus);
  return plus;
}
export function calcLicensePlate(str: string): ListNode | false {
  const result = rec(createNumArr(str));
  const found = didFind0(result);
  return found;
}

function getClosestTo0(list: LinkedList): number {
  if (!list || list.length === 0) return 1000;
  let tN: ListNode | null = list.head;
  if (!tN) throw new Error();
  let min = tN.data.num;
  while (tN !== null && tN.data) {
    if (Math.abs(tN.data.num) < Math.abs(min)) min = tN.data.num;

    tN = tN.next;
  }
  return min;
}
function didFind0(list: LinkedList): ListNode | false {
  let tN: ListNode | null = list.head;
  if (!tN) return false;
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
): LinkedList | undefined {
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
