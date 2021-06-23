"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const numArr = [4, 3, 2, 1];
function rec(arr) {
    if (arr.length === 1) {
        return new LinkedList_1.LinkedList(new LinkedList_1.ListNode({
            num: arr[0],
            operation: "leaf",
            newArr: arr,
            newArrIndex: 0,
        }));
    }
    const num = arr.pop();
    let minus = calcOperation(arr, num, "minus");
    let plus = calcOperation(arr, num, "plus");
    plus.combineList(minus);
    return plus;
}
const result = rec(numArr);
if (didFind0(result)) {
    console.log("FOUND 0!!!");
    result.printList();
}
function getClosestTo0(list) {
    if (!list || list.length === 0)
        return;
    let tN = list.head;
    let min = tN.data.num;
    while (tN !== null && tN.data) {
        if (Math.abs(tN.data.num) < Math.abs(min))
            min = tN.data.num;
        tN = tN.next;
    }
    return min;
}
function didFind0(list) {
    let tN = list.head;
    while (tN !== null && tN.data) {
        if (tN.data.operation === "leaf" && tN.data.num === 0)
            return true;
        tN = tN.next;
    }
    return false;
}
function calcOperation(arr, num, operation) {
    let defRet;
    for (let i = 0; i < arr.length; i++) {
        const tempArr = [...arr];
        tempArr[i] += operation === "minus" ? -num : num;
        const tempCalc = new LinkedList_1.LinkedList(new LinkedList_1.ListNode({ num, operation, newArr: tempArr, newArrIndex: i }));
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
//# sourceMappingURL=index.js.map