import { expect, test } from "vitest";
import { incrementByOne } from "../src/index";
test("should return 2 when incrementByOne is called with an input of 1", () => {
    expect(incrementByOne(1)).toBe(2);
});
