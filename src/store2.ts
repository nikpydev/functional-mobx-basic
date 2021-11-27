import { makeAutoObservable } from "mobx";

export class Store2 {
  bugsList: string[] = ["bug1", "bug2", "bug3"];
  selectedBugs: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public selectBug = (item: string) => {
    this.selectedBugs.push(item);
  };
}
