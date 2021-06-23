"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
        if (data.newArr) {
            data.newArr = [...data.newArr];
        }
    }
}
exports.ListNode = ListNode;
class LinkedList {
    constructor(head) {
        this._head = head;
        this.length = 1;
    }
    get head() {
        if (this._head && this._head.prev != null) {
            let tN = this._head.prev;
            while (tN.prev != null)
                tN = tN.prev;
            return tN;
        }
        return this._head;
    }
    combineList(other) {
        if (this.head === null) {
            this._head = other.head;
            this.length = other.length;
            return;
        }
        this.length += other.length;
        const tH = Object.assign({}, other.head);
        // if (other.head) {
        //   this.head.data.newArr = [...other.head.data.newArr];
        //   this.head.data.newArrIndex = other.head.data.newArrIndex;
        // }
        other._head = this.head;
        let tN = this.head;
        while (tN !== null && tN.next !== null) {
            tN = tN.next;
        }
        tN.next = tH;
        tH.prev = tN;
    }
    clear() {
        this._head = null;
        this.length = 0;
    }
    printList() {
        let tN = this.head;
        let calc = "";
        while (tN !== null && tN.next !== null) {
            const newArr = [...tN.data.newArr];
            const newArrIndex = tN.data.newArrIndex;
            calc +=
                tN.data.num +
                    (tN.data.operation === "plus"
                        ? "+"
                        : tN.data.operation === "leaf"
                            ? "="
                            : "-");
            const a = newArr.splice(0, newArrIndex + 1);
            const b = newArr.splice(newArrIndex + 1, newArr.length);
            console.log(a + calc + b);
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
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map