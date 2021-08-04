import { addString } from "./index";
import { toNumber } from "./index";
import { filterOrange } from "./index";

describe("addString", () => {
    test('"a" + "b" to equal "ab"', () => {
        expect(addString("a", "b")).toBe("ab");
    });

    test('"a" + 1 to equal "a1"', () => {
      expect(addString("a", 1)).toBe("a1");
    });

    test('1 + 1 to equal -1', () => {
        expect(addString(1, 1)).toBe(-1);
      });
})

describe("toNumber", () => {
    test('"123" to equal 123', () => {
        expect(toNumber("123")).toBe(123);
    });

    test('123 to equal 123', () => {
      expect(toNumber(123)).toBe(123);
    });

    test('"3b3b3b" to equal 3', () => {
        expect(toNumber("3b3b3b")).toBe(3);
    });

    test('"b3b3b3" to equal NaN', () => {
        expect(toNumber("b3b3b3")).toBe(NaN);
    });

    test('Numbers with a positive sign to be unsigned', () => {
        expect(toNumber("+5")).toBe(5);
    });

    test('floating point numbers to be integer', () => {
        expect(toNumber("-5.9")).toBe(-5);
    });
})

describe("filterOrange", () => {
    test('Array containing "orange"', () => {
        const fruit = ["orange", "apple", "peach"];
        expect(filterOrange(fruit)).toEqual(["orange"]);
    });
    test('Array not containing orange', () => {
        const fruit = ["apple", "peach"];
        expect(filterOrange(fruit)).toEqual([]);
    });

    test('throws on not array', () => {
        const fruit = "orange"
        expect( () => filterOrange(fruit)).toThrow();
    });

    test('throws on undefined', () => {
        expect( () => filterOrange(fruit)).toThrow();
    });
})
