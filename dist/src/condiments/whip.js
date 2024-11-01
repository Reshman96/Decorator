import { CondimentDecorator } from "../abstractClasses/condimentDecorator";
import { round } from "../utils/round";
export class Whip extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }
    cost() {
        return round(this.beverage.cost() + 0.2);
    }
}
