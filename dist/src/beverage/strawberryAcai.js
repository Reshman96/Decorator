import { Beverage } from "../abstractClasses/beverage";
export class StrawberryAcai extends Beverage {
    constructor() {
        super();
    }
    cost() {
        return 5.55;
    }
    getDescription() {
        return "Strawberry Acai Refresha Drink";
    }
}
