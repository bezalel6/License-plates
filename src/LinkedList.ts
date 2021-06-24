export type RecCall = {
  num: number;
  operatingOn: number;
  newArr: number[];
  newArrIndex: number;
  operation: "leaf" | "plus" | "minus" | "multiply" | "divide";
};

export class ListNode {
  data: RecCall;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(
    data: RecCall,
    next: ListNode | null = null,
    prev: ListNode | null = null
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
    if (data.newArr) {
      data.newArr = [...data.newArr];
    }
  }

  printTree(): [] {
    let tN: ListNode = this;
    let found0: boolean = false;
    const ret: any = [];
    while (tN != null && !found0 && tN.next) {
      let calc = "";
      let operationSign = "";
      let newArr: number[] = [];
      if (tN.data.newArr) newArr = [...tN.data.newArr];
      const newArrIndex = tN.data.newArrIndex ? tN.data.newArrIndex : 0;
      if (tN.data.operation === "leaf" && tN.data.num === 0) found0 = true;
      let calcRes = +tN.data.num;
      switch (tN.data.operation) {
        case "plus":
          calcRes += +tN.data.operatingOn;
          if (tN.data.operatingOn < 0) operationSign = "";
          else operationSign = "+";
          break;
        case "minus":
          calcRes -= +tN.data.operatingOn;
          if (tN.data.operatingOn < 0) operationSign = "";
          else operationSign = "-";
          break;
        case "leaf":
          operationSign = "#";
          break;
        case "multiply":
          operationSign = "*";
          break;
        case "divide":
          operationSign = "/";
          break;
      }
      calc += tN.data.num + operationSign;
      const tArr: number[] = [...newArr];
      let a = newArr.splice(0, newArrIndex) + ",";
      newArr = tArr;
      let b = "," + newArr.splice(newArrIndex + 1, newArr.length);
      newArr = tArr;
      a = a === "," ? "" : a;
      b = b === "," ? "" : b;
      const currentCalc =
        "  " + a + calc + tN.data.operatingOn + "=" + calcRes + b + "  ";
      ret.push(currentCalc);
      tN = tN.next;
    }
    return ret;
  }
}
export class LinkedList {
  private _head: ListNode | null;
  length: number;
  constructor(head: ListNode) {
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
