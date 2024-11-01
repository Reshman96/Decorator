import { Beverage } from "../abstractClasses/beverage";
export class SuspiciousDrink extends Beverage {
    constructor() {
        super();
    }
    cost() {
        return 0.0;
    }
}
