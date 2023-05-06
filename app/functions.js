const length = (array) => {
  let position = 0;

  for (const i in array) {
    if (array) position++;
  }

  return position;
};

const push = (array, ...newElement) => {
  const newThings = [...newElement];
  for (let i = 0; i < newThings.length; i++) {
    array[array.length] = newThings[i];
  }

  return array.length;
};

const filter = (array, argument) => {
  for (let i = 0; i < i.length; i++) {
    for (let j = 0; j[i] < j.length; j++) {
      if (array[i][j] <= argument) {
        return array;
      }
    }
  }
};

console.log(filter([3, 7], 5));

const pop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
};

const shift = (array) => {
  const cloneArray = [...array];
  array.length = 0;
  for (let i = 1; i < cloneArray; i++) {
    array[array[i]] = cloneArray[i];
  }

  return cloneArray[0];
};

const unshift = (array, ...newElement) => {
  const mergedArray = [...newElement, ...array];
  array.length = 0;
  for (let i = 0; i < mergedArray.length; i++) {
    array[i] = mergedArray[i];
  }

  return array.length;
};

const some = (array, callBack) => {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (callBack(element)) {
      return true;
    }
  }

  return false;
};

export { length, push, pop, shift, unshift, some };
