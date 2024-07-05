import { describe, it, expect } from "vitest"
import { sum } from "./math.mjs"
describe("demo testing", () => {
  it("Should be 10 when nb1=5 and nb2=5", () => {
    // Act
    const result = sum(nb1, nb2)
    // Assert
    expect(result).toMatch(10)
  })


  it.each([
    [5,3,2],
    [4,0,4],
    [-8,-3,-5],
  ])("Should be %i when nb1=%i and nb2=%i", (expected, nb1, nb2) => {
    // Act
    const result = sum(nb1, nb2)
    // Assert
    expect(result).toMatch(expected)
  })
});
