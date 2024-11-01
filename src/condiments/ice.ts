import { Beverage } from "../abstractClasses/beverage";
import { CondimentDecorator } from "../abstractClasses/condimentDecorator";
import { round } from "../utils/round";

export class Ice extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Ice";
  }

  cost() {
    return round(this.beverage.cost() + 0.1);
  }
}
