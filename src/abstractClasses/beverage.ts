export abstract class Beverage {
  description: string = "Unknown Beverage";

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}
