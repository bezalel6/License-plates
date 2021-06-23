"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var numArr = [4, 3, 2, 1, 6, 7, 5, 9, 1];
console.log("trying " + numArr);
function rec(arr) {
    if (arr.length === 1) {
        return new LinkedList_1.LinkedList(new LinkedList_1.ListNode({
            num: arr[0],
            operation: "leaf",
            newArr: arr,
            newArrIndex: 0,
            operatingOn: arr[0],
        }));
    }
    var num = arr.pop();
    var minus = calcOperation(arr, num, "minus");
    var plus = calcOperation(arr, num, "plus");
    plus.combineList(minus);
    return plus;
}
var result = rec(numArr);
var found = didFind0(result);
if (found) {
    console.log("FOUND 0!!!");
    found.printTree();
}
function getClosestTo0(list) {
    if (!list || list.length === 0)
        return;
    var tN = list.head;
    var min = tN.data.num;
    while (tN !== null && tN.data) {
        if (Math.abs(tN.data.num) < Math.abs(min))
            min = tN.data.num;
        tN = tN.next;
    }
    return min;
}
function didFind0(list) {
    var tN = list.head;
    while (tN !== null && tN.data) {
        if (tN.data.operation === "leaf" && tN.data.num === 0) {
            var tNN = tN;
            while (tNN.prev != null)
                tNN = tNN.prev;
            return tNN;
        }
        tN = tN.next;
    }
    return false;
}
function calcOperation(arr, num, operation) {
    var defRet;
    for (var i = 0; i < arr.length; i++) {
        var tempArr = __spreadArray([], arr);
        var storeOgNum = tempArr[i];
        tempArr[i] += operation === "minus" ? -num : num;
        var tempCalc = new LinkedList_1.LinkedList(new LinkedList_1.ListNode({
            num: num,
            operation: operation,
            newArr: tempArr,
            newArrIndex: i,
            operatingOn: storeOgNum,
        }));
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
