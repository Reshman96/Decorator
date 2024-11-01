import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;

  public abstract getDescription(): string;
}
