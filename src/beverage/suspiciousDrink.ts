import { Beverage } from "../abstractClasses/beverage";

export class SuspiciousDrink extends Beverage {
  public constructor() {
    super();
  }

  cost() {
    return 0.0;
  }
}
