"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.data = data;
        this.next = next;
        this.prev = prev;
        if (data.newArr) {
            data.newArr = __spreadArray([], data.newArr);
        }
    }
    ListNode.prototype.printTree = function () {
        var tN = this;
        var found0 = false;
        while (tN != null && !found0) {
            var calc = "";
            var newArr = __spreadArray([], tN.data.newArr);
            var newArrIndex = tN.data.newArrIndex;
            if (tN.data.operation === "leaf" && tN.data.num === 0)
                found0 = true;
            calc +=
                tN.data.num +
                    (tN.data.operation === "plus"
                        ? "+"
                        : tN.data.operation === "leaf"
                            ? "#"
                            : "-");
            var a = newArr.splice(0, newArrIndex) + ",";
            var b = "," + newArr.splice(newArrIndex + 1, newArr.length);
            a = a === "," ? "" : a;
            b = b === "," ? "" : b;
            var calcRes = newArr[newArrIndex];
            // newArr[newArrIndex] === undefined
            //   ? newArr[newArrIndex - 1] === tN.data.operatingOn + tN.data.num
            //     ? newArr[newArrIndex - 1]
            //     : newArr[newArrIndex + 1]
            //   : newArr[newArrIndex];
            console.log("[" + a + calc + tN.data.operatingOn + "=" + calcRes + b + "]");
            tN = tN.next;
        }
    };
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this._head = head;
        this.length = 1;
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            if (this._head && this._head.prev != null) {
                var tN = this._head.prev;
                while (tN.prev != null)
                    tN = tN.prev;
                return tN;
            }
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.combineList = function (other) {
        if (this.head === null) {
            this._head = other.head;
            this.length = other.length;
            return;
        }
        this.length += other.length;
        var tH = other.head;
        other._head = this.head;
        var tN = this.head;
        while (tN !== null && tN.next !== null) {
            tN = tN.next;
        }
        tN.next = tH;
        if (tH)
            tH.prev = tN;
    };
    LinkedList.prototype.clear = function () {
        this._head = null;
        this.length = 0;
    };
    LinkedList.prototype.printList = function () {
        var tN = this.head;
        var calc = "";
        while (tN !== null && tN.next !== null) {
            var newArr = __spreadArray([], tN.data.newArr);
            var newArrIndex = tN.data.newArrIndex;
            calc +=
                tN.data.num +
                    (tN.data.operation === "plus"
                        ? "+"
                        : tN.data.operation === "leaf"
                            ? "="
                            : "-");
            var a = newArr.splice(0, newArrIndex + 1);
            var b = newArr.splice(newArrIndex + 2, newArr.length);
            var calcRes = newArr[newArrIndex];
            console.log("[ " + a + "," + calc + calcRes + "," + b + "]");
            tN = tN.next;
        }
        //     let prnt: string = "[";
        //     if (this.head.data.newArr)
        //       for (let i = 0; i < this.head.data.newArr.length; i++) {
        //         const isLastIndex = i === this.head.data.newArrIndex - 1 ? true : false;
        //         const cell = this.head.data.newArr[i];
        //         if (i === this.head.data.newArrIndex) {
        //           prnt += calc;
        //         }
        //         prnt += +cell;
        //         console.log(" " + prnt + " " + (isLastIndex ? "]" : ","));
        //       }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
