import { CondimentDecorator } from "../abstractClasses/condimentDecorator";
import { round } from "../utils/round";
export class Ice extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Ice";
    }
    cost() {
        return round(this.beverage.cost() + 0.1);
    }
}
