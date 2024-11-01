import { Beverage } from "../abstractClasses/beverage";
export class PumpkinSpiceLatte extends Beverage {
    constructor() {
        super();
    }
    cost() {
        return 6.15;
    }
    getDescription() {
        return "Pumpkin Spice Latte";
    }
}
