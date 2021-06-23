export type RecCall = {
  num: number;
  operatingOn: number;
  newArr?: number[];
  newArrIndex?: number;
  operation: "leaf" | "plus" | "minus";
};

export class ListNode {
  data: RecCall;
  next: ListNode;
  prev: ListNode;
  constructor(data: RecCall, next: ListNode = null, prev: ListNode = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
    if (data.newArr) {
      data.newArr = [...data.newArr];
    }
  }
  printTree() {
    let tN: ListNode = this;
    let found0: boolean = false;
    while (tN != null && !found0) {
      let calc = "";
      const newArr = [...tN.data.newArr];
      const newArrIndex = tN.data.newArrIndex;
      if (tN.data.operation === "leaf" && tN.data.num === 0) found0 = true;
      calc +=
        tN.data.num +
        (tN.data.operation === "plus"
          ? "+"
          : tN.data.operation === "leaf"
          ? "#"
          : "-");
      let a = newArr.splice(0, newArrIndex) + ",";
      let b = "," + newArr.splice(newArrIndex + 1, newArr.length);
      a = a === "," ? "" : a;
      b = b === "," ? "" : b;
      const calcRes = newArr[newArrIndex];
      // newArr[newArrIndex] === undefined
      //   ? newArr[newArrIndex - 1] === tN.data.operatingOn + tN.data.num
      //     ? newArr[newArrIndex - 1]
      //     : newArr[newArrIndex + 1]
      //   : newArr[newArrIndex];
      console.log(
        "[" + a + calc + tN.data.operatingOn + "=" + calcRes + b + "]"
      );
      tN = tN.next;
    }
  }
}
export class LinkedList {
  private _head: ListNode;
  length: number;
  constructor(head) {
    this._head = head;
    this.length = 1;
  }
  public get head() {
    if (this._head && this._head.prev != null) {
      let tN: ListNode = this._head.prev;
      while (tN.prev != null) tN = tN.prev;
      return tN;
    }
    return this._head;
  }
  combineList(other: LinkedList) {
    if (this.head === null) {
      this._head = other.head;
      this.length = other.length;
      return;
    }
    this.length += other.length;
    const tH = other.head;

    other._head = this.head;
    let tN = this.head;
    while (tN !== null && tN.next !== null) {
      tN = tN.next;
    }
    tN.next = tH;
    if (tH) tH.prev = tN;
  }
  clear() {
    this._head = null;
    this.length = 0;
  }
  printList() {
    let tN = this.head;
    let calc: string = "";
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
      const b = newArr.splice(newArrIndex + 2, newArr.length);
      const calcRes = newArr[newArrIndex];
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
  }
}
