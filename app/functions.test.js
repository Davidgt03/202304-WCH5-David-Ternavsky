import {
  length,
  push,
  pop,
  shift,
  unshift,
  some,
  every,
  find,
  filter,
} from "./functions.js";

describe("Given the function length", () => {
  describe("When given the array of 1, 2 ,3", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3];

      const expectedResult = 3;
      const resultReturned = length(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });
  describe("When given an empty array  ", () => {
    test("Then it should return 0", () => {
      const array = [];

      const expectedResult = 0;
      const resultReturned = length(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("Given the function push", () => {
    describe("When given the array of 1,2,3 and a 4 ", () => {
      test("Then it should return and array with 4", () => {
        const array = [1, 2, 3];
        const value = 4;

        const expectedResult = 4;
        const resultReturned = push(array, value);

        expect(resultReturned).toBe(expectedResult);
      });
    });
    describe("When given the array of 1,2,3 and a `classic`string ", () => {
      test("Then it should return and array with 4", () => {
        const array = [1, 2, 3];
        const value = "classic";

        const expectedResult = 4;
        const resultReturned = push(array, value);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });
  describe("Given the function pop", () => {
    describe("When given the array of 1,2,3 ", () => {
      test("Then it should delete the 3 of the array  ", () => {
        const array = [1, 2, 3];

        const expectedResult = 3;
        const resultReturned = pop(array);

        expect(resultReturned).toBe(expectedResult);
      });
    });
    describe("When given an empty array ", () => {
      test("Then it should return undefined  ", () => {
        const array = [];

        const expectedResult = undefined;
        const resultReturned = pop(array);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });

  describe("Given the function shift", () => {
    describe("When given the array of 1,2,3 ", () => {
      test("Then it should delete the 1 of the array  ", () => {
        const array = [1, 2, 3];

        const expectedResult = 1;
        const resultReturned = shift(array);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });
  describe("When given an empty array", () => {
    test("Then it should return undefined", () => {
      const array = [];

      const expectedResult = undefined;
      const resultReturned = shift(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });
  describe("Given the function unshift", () => {
    describe("When given the array of 1,2,3  and another one with 4 ,5", () => {
      test("Then it should return a 4 ", () => {
        const array = [1, 2, 3];
        const newNumbers = 4;

        const expectedResult = 4;
        const resultReturned = unshift(array, newNumbers);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });
  describe("When given a 4 to an empty array ", () => {
    test("Then it should return an array with 1 ", () => {
      const array = [];
      const newNumbers = 4;

      const expectedResult = 1;
      const resultReturned = unshift(array, newNumbers);

      expect(resultReturned).toBe(expectedResult);
    });
  });
  describe("Given the function some", () => {
    describe("When given the array of 1,2,3  and a callback with the number 10", () => {
      test("Then it should return false", () => {
        const array = [1, 2, 3];

        const expectedResult = false;
        const resultReturned = some(array, (array) => array > 10);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });
  describe("When given the array of 1,2,3  and another one with 4 ,5", () => {
    test("Then it should return a 4 ", () => {
      const array = [1, 2, 3];

      const expectedResult = false;
      const resultReturned = some(array, (array) => array > 10);

      expect(resultReturned).toBe(expectedResult);
    });
  });
  describe("Given the function every", () => {
    describe("When given the array with this numbers 1,2,4,5,6 and you put a value of  < 5", () => {
      test("Then it should return a true ", () => {
        const array = [1, 2, 3, 4, 5, 6];

        const expectedResult = false;
        const resultReturned = every(array, (number) => number > 5);

        expect(resultReturned).toBe(expectedResult);
      });
    });
    describe("When given the array with this numbers 1,2,4,5,6 and you put a value of  < 10", () => {
      test("Then it should return a true ", () => {
        const array = [1, 2, 3, 4, 5, 6];

        const expectedResult = true;
        const resultReturned = every(array, (number) => number < 10);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });
  describe("Given the function find", () => {
    describe("When given the array with this numbers 1,2,4,5,6 and you put a value of  < 3", () => {
      test("Then it should return a 3 ", () => {
        const array = [1, 2, 3, 4, 5, 6];

        const expectedResult = 3;
        const resultReturned = find(array, (number) => number >= 3);

        expect(resultReturned).toBe(expectedResult);
      });
    });
    describe("When given the array with this numbers 1,2,4,5,6 and you put a value of  < 3", () => {
      test("Then it should return a 3 ", () => {
        const array = [1, 2];

        const expectedResult = false;
        const resultReturned = find(array, (number) => number >= 3);

        expect(resultReturned).toBe(expectedResult);
      });
    });
  });

  describe("Given the function filter", () => {
    describe("When given the array with this numbers 1,2,4,5,6 and you put a value of  < 3", () => {
      test("Then it should return array with 4,5,6 ", () => {
        const array = [1, 2, 3, 4, 5, 6];

        const expectedResult = [4, 5, 6];
        const resultReturned = filter(array, (number) => number > 3);

        expect(resultReturned).toStrictEqual(expectedResult);
      });
    });
    describe("When given the array with this numbers 1,2, and you put a value of  < 3", () => {
      test("Then it should return an empty array ", () => {
        const array = [1, 2];

        const expectedResult = [];
        const resultReturned = filter(array, (number) => number > 3);

        expect(resultReturned).toStrictEqual(expectedResult);
      });
    });
  });
});
