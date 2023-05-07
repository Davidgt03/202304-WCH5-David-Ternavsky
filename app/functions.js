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
    if (callBack(element) === true) {
      return true;
    }
  }

  return false;
};

const every = (array, callBack) => {
  let isVeridic = false;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    isVeridic = callBack(element);
    if (!isVeridic) {
      return isVeridic;
    }
  }

  return isVeridic;
};

const find = (array, callBack) => {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (callBack(element) === true) {
      return element;
    }
  }

  return false;
};

const filter = (array, callBack) => {
  const filteredItems = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (callBack(element) === true) {
      push(filteredItems, element);
    }
  }

  return filteredItems;
};

export { length, push, pop, shift, unshift, some, every, find, filter };
