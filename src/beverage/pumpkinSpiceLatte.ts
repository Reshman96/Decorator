import { Beverage } from "../abstractClasses/beverage";

export class PumpkinSpiceLatte extends Beverage {
  public constructor() {
    super();
  }

  cost() {
    return 6.15;
  }

  getDescription(): string {
    return "Pumpkin Spice Latte";
  }
}
