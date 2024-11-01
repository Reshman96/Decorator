import { Beverage } from "../abstractClasses/beverage";

export class StrawberryAcai extends Beverage {
  public constructor() {
    super();
  }

  cost() {
    return 5.55;
  }

  getDescription(): string {
    return "Strawberry Acai Refresha Drink";
  }
}
