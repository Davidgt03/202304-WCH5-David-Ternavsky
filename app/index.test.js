import { length, push, pop, shift, unshift, some } from "./index.js";

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
});

describe("Given the function newSome", () => {
  describe("When given the list of 1, 2, 3, 5 and the callback of even", () => {
    test("Then it should return true", () => {
      const array = [1, 2, 3, 5];
      const even = (element) => element % 2 === 0;

      const expectedResult = true;
      const resultReturned = index.newSome(array, even);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newFind", () => {
  describe("When given the list Marco, Andoni, Pachi and we search for Pachi", () => {
    test("Then it should return Pachi", () => {
      const wordList = ["Marco", "Andoni", "Pachi"];
      const wordToSearch = "Pachi";

      const expectedResult = "Pachi";
      const resultReturned = index.newFind(wordList, wordToSearch);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list 1, 2, 3, 4, 5, 6, 7 and we search for 4", () => {
    test("Then it should return Pachi", () => {
      const wordList = [1, 2, 3, 4, 5, 6, 7];
      const wordToSearch = 4;

      const expectedResult = 4;
      const resultReturned = index.newFind(wordList, wordToSearch);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});
