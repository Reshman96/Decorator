import { describe, expect, test } from "vitest";
import { StrawberryAcai } from "../src/beverage/strawberryAcai";
import { Ice } from "../src/condiments/ice";
import { PumpkinSpiceLatte } from "../src/beverage/pumpkinSpiceLatte";
import { SteamedMilk } from "../src/condiments/steamedMilk";
import { Whip } from "../src/condiments/whip";
import { SuspiciousDrink } from "../src/beverage/suspiciousDrink";
describe("Strawberry Acai Tests", () => {
    const drink = new StrawberryAcai();
    test("should return Strawberry Acai description when getDescription is called", () => {
        expect(drink.getDescription()).toBe("Strawberry Acai Refresha Drink");
    });
    test("should return £5.55 when cost is called and there are no condiments", () => {
        expect(drink.cost()).toBe(5.55);
    });
    test("should return £5.65 when cost is called and ice is added once", () => {
        // Ice is 0.1 extra
        const drinkWithIce = new Ice(drink);
        expect(drinkWithIce.cost()).toBe(5.65);
    });
    test("should return £5.75 when cost is called and ice is added twice", () => {
        const drinkWithIce = new Ice(drink);
        const drinkWithTwoIce = new Ice(drinkWithIce);
        expect(drinkWithTwoIce.cost()).toBe(5.75);
    });
});
describe("Pumpkin Spice Latte with Steamed Milk and Whip Tests", () => {
    const drink = new PumpkinSpiceLatte();
    const drinkWithMilkAndWhip = new SteamedMilk(new Whip(drink));
    test("should return Pumpkin Spice Latte, Whip and Steamed Milk descriptions when getDescription is called", () => {
        expect(drinkWithMilkAndWhip.getDescription()).toBe("Pumpkin Spice Latte, Whip, Steamed Milk");
    });
    test("should return £6.60 when cost is called", () => {
        // Pumpkin Spice Latte is 6.15, Whip is 0.2, Steamed Milk is 0.25
        expect(drinkWithMilkAndWhip.cost()).toBe(6.6);
    });
});
describe("Suspicious Drink Tests", () => {
    const drink = new SuspiciousDrink();
    test("should return Unknown beverage when getDescription is called", () => {
        expect(drink.getDescription()).toBe("Unknown Beverage");
    });
});
