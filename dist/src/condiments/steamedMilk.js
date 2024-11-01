import { CondimentDecorator } from "../abstractClasses/condimentDecorator";
import { round } from "../utils/round";
export class SteamedMilk extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Steamed Milk";
    }
    cost() {
        return round(this.beverage.cost() + 0.25);
    }
}
